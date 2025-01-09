import React from 'react'

export default function Contact() {
  document.title="Contact";
  return (
    <>
    <div id="contact" >
      <div className="titel pt-5 text-center">
        <h1 className='text-uppercase'>conatct section</h1>
        <div className=" my-3 customUnderline d-flex justify-content-center align-items-center">
          <div className="line"></div>
          <i className="fa-solid fa-star mx-3"></i>
          <div className="line"></div>
        </div>
      </div>
      <form className='w-50 m-auto py-5'>
          <input type="text" placeholder='userName' name='userName' className='form-inputs w-100 shadow-sm py-2 px-3 my-4 rounded-2'/>
          <input type="number" placeholder='userAge' name='userAge' className='form-inputs w-100 shadow-sm py-2 px-3 my-4 rounded-2'/>
          <input type="email" placeholder='userEmail' name='userEmail' className='form-inputs w-100 shadow-sm py-2 px-4 my-3 rounded-2'/>
          <input type="password" placeholder='userPassword' name='userPassword' className='form-inputs w-100 shadow-sm py-2 px-4 my-3 rounded-2'/>
          <button id="sendMessage" className='text-white mt-4 rounded-3'>send Message</button>
      </form>
    </div>


    </>
  )
}
