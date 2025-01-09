import React from 'react'

export default function About() {
  document.title="About";
  return (
    <>
      <div id="about" className='py-3 d-flex flex-column justify-content-center align-items-center'>
          <h1 className='text-uppercase'>about component</h1>
          <div className=" my-3 customUnderline d-flex justify-content-center align-items-center">
            <div className="line"></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className="line"></div>
          </div>
          <div className="desc container mt-4">
            <div className="row">
              <div className='col-md-6'>
                <div className="content px-4 lh-lg">
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </div>
              </div>
              <div className='col-md-6'>
                <div className="content px-4 lh-lg">
                  Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </div>
              </div>
            </div>
          </div>      
      </div>

    </>
  )
}
