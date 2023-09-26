import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(false);
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_psy4s07', 'template_bs3pef8', form.current, 'LeJk40qTcF1yAzkFv')
      .then((result) => {
        console.log('line number 19 ',result);
          if(result.status === 200){
            setStatus(true);
          }
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
            <input type='text' name='from_name' placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input type='text' name='from_email' placeholder='Enter your email'
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea name='message' placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
                    flex items-center rounded-md hover:scale-110 duration-300'>Book Apointment</button>
            {status && <p className='text-xl text-white self-center'>Message has been sent</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact