import React from 'react'
import avatarImg from '../../assets/imgs/avataaars.svg';
export default function Home() {
  document.title="Home";
  return (
    <> 
      <div id="home" className='py-3 d-flex flex-column justify-content-center align-items-center'>
          <div className="img d-flex justify-content-center align-items-center mb-3">
            <img src={avatarImg} alt="avatar" className='w-75 text-center'/>
          </div>
          <h1 className='text-uppercase'>start Framework</h1>
          <div className=" my-3 customUnderline d-flex justify-content-center align-items-center">
            <div className="line"></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className="line"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  )
}
// "homepage": "http://mohamedshrief.github.io/React-SPA-App",



// "predeploy": "npm run build",
// "deploy": "gh-pages -d dist",


// base: "/React-SPA-App/",
