import {useState} from "react";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function ContactForm() {
    const [name,setname] =useState(null);
    const[email,setemail]=useState(null);
    const[text,settext]=useState(null);

   

    const viacall =()=>{
        console.log("I am from call")
    };
    const viachat=()=>{
        console.log("I am from chat")
    };
    const onsubmit=(event)=>{
        event.preventDefault();
        setname(event.target[0].value);
        setemail(event.target[1].value);
        settext(event.target[2].value);
    
    };
    
  return <section className={styles.container}>
    <div className={styles.contact_form}>
        <div className={styles.top_btn}>
             <Button onClick={viachat} text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
             <Button onClick={viacall} text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
        </div>
    <Button isoutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>
     <form onSubmit={onsubmit}>
        <div className={styles.form_control}>
             <label htmlFor="name">Name</label>
              <input type="text" name="name"/>
        </div>
         <div className={styles.form_control}>
             <label htmlFor="email">Email</label>
              <input type="email" name="email"/>
        </div>
         <div className={styles.form_control}>
             <label htmlFor="text">Text</label>
              <textarea type="text" rows="8" name="text"/>
        </div>
        <div style={{display:"flex",
            justifyContent:"end"
        }}>
            
    <Button  text="SUBMIT BUTTON" />
        </div>
        <div>
            {
                name + " " + email + " " + text
            }
        </div>
        
        </form>   
    </div>
    <div className={styles.contact_Image}>
          <img src="/images/service.svg" alt="contactimage" />
    </div>
  </section>;
};

export default ContactForm;
