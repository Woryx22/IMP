import "../index.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import igi from "../images/instagram.png";



export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0c1dd8x', 'template_vos1msi', form.current, {
        publicKey: '5PyvafDr9xaDmZYeO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  };

  return (
<div id="contact" className="bg-[#44456d] w-full min-h-screen bg-bottom bg-cover flex flex-col items-center py-12">
      <h2 className="text-white font-bold text-4xl mb-6">Kontakt</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-4/5 max-w-4xl mt-2 md:mt-20">
        
        {/* Contact Form */}
        <div className="flex items-center justify-center w-full h-full ">
          <form className="max-w-sm mx-auto" ref={form} onSubmit={sendEmail}>
            <div className="mb-5">
              <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jméno a příjmení</label>
              <input type="text" name="user_name" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jan Novák" />
            </div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Váš email</label>
            <input type="email" name="user_email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300
                       text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="jan.novak@gmail.com" />
            
            <div className="mb-5">
              <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zpráva</label>
              <textarea type="text" name="message" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg
                           bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <p className=" text-sm text-gray-500 dark:text-gray-400">Odesláním formuláře souhlasíte s <a href="/podminky" className="text-blue-500 underline">Podmínkami</a></p>
            <input type="submit" value="Odeslat" className="bg-[#7d7fbb] px-4 py-1.5 rounded-2xl mt-2 hover:bg-[#4c50c7] hover:cursor-pointer font-bold text-white"/>
          </form>
        </div>
        {/* Contact Information */}
        <div className="text-white space-y-8 block m-auto">
          <p className="text-xl font-semibold">Kateřina Horáčková</p>
          <p>📞 <a href="tel:+420605816845" className="hover:underline">605 816 845</a></p>
          <p>📧 <a href="mailto:katerinasfotakem@seznam.cz" className="hover:underline">katerinasfotakem@seznam.cz</a></p>
          <p> <img src={igi} alt="instagram-ikona" className="inline w-5" loading="lazy" /> <a href="https://www.instagram.com/khphoto_cz" target="_blank" rel="noopener noreferrer" className="hover:underline">@khphoto_cz</a></p>
        </div>
      </div>
    </div>
  )
}
//z dokumentace emailjs