import React from 'react'
import SModal from '../SModal/SModal'

export default function ItemDisplay({img, alt, passedImg , selectedImg}) {
  return (
    <>  
    <div className="col-md-4">
        <div className="itemContent position-relative overflow-hidden">
            <img src={img} alt={alt} className='w-100 img-thumbnail' />
            <div onClick={()=> passedImg(img)}  className="overlay position-absolute d-flex justify-content-center align-items-center">
                <i className="text-white fa-solid fa-plus fa-6x "></i>
            </div>
        </div>
        {selectedImg && <SModal selectedImg={selectedImg} passedImg= {passedImg} />}
        </div>
      
    </>
  )
}
