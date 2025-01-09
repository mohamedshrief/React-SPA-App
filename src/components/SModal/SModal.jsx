import React from 'react'

export default function SModal({selectedImg, passedImg}) {
  return (
    <>
        <div onClick={(e) =>  e.target.tagName != 'IMG' ? passedImg('') : '' } className="imgmodal">
            <div className="imglayer">
              <img src={selectedImg} alt='1' className='w-100'/>
            </div>
        </div>
    </>
  )
}
