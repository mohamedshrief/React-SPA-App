import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className='text-white'>
            <div className="uppersec py-5">
                <div className="container py-4">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="content">
                                <h2>LOCATION</h2>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content">
                                <h2>AROUND THE WEB</h2>
                                <ul className='list-unstyled d-flex justify-content-center'>
                                    <li><i className='fa-brands fa-facebook'></i></li>
                                    <li><i className='fa-brands fa-twitter'></i></li>
                                    <li><i className='fa-brands fa-linkedin'></i></li>
                                    <li><i className='fa-solid fa-globe'></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content">
                                <h2>ABOUT FREELANCER</h2>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lowersec text-center">
                <p>Copyright © Your Website 2021</p>
            </div>
     
        </footer>
    </>
  )
}
