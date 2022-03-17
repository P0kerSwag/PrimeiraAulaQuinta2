import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7mdbqgc', 'template_2ymqoyt', form.current, 'csvve3LuTHJVdIgkP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div class="formulario">
          <center>
           <form ref={form} onSubmit={sendEmail}>
           <label>Name</label> <br/>
           <input type="text" name="name" /> <br/>
           <label>Email</label> <br/>
           <input type="email" name="email" /> <br/>
           <label>Message</label> <br/>
           <textarea name="message" cols="20" rows="8" /> <br/>
           <input type="submit" value="Send" /> <br/>
           <label>Whatsapp</label> <br/>
           <textarea name="message" cols="10" rows="1"/> <br/>
           <input type="text" name="whats" /> <br/>
           </form>
          </center>
    </div>
  );    
};