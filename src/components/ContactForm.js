import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    
    const formRef = useRef(null);

    const emailSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm("service_l5zcnhl", "template_b8xlzqg", formRef.current, "_AafCrJlkpvAZE82_")
        .then((result) => {
            console.log(result.text);
        }).catch((error) => {
            console.error(error.text);
        });
    };
  
    return (
        <form
            className="contactForm"
            onSubmit={emailSubmit}
            ref={formRef}
        >
            <h1>Contact</h1>
            <h4>Pour en savoir plus, n'hésitez pas à me contacter, je serai ravie d'échanger avec vous.</h4>
            <div>
                <input className="contactInput" type="text" placeholder="NOM*" name="name" required />
                <input type="email" placeholder="EMAIL*" name="email" required />
                <input type="tel" placeholder="TELEPHONE" name="phone" pattern="[0-9]{10}" />
            </div>
            <div>
                <textarea placeholder="VOTRE MESSAGE*" name="message" required />
            </div>
            <div>
                <button type="submit">ENVOYER</button>
            </div>
        </form>
    );
};

export default ContactForm;