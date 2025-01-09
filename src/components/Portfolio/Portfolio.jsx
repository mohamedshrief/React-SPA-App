import { useState } from 'react'
import img1 from '../../assets/imgs/poert1.png'
import img2 from '../../assets/imgs/port2.png'
import img3 from '../../assets/imgs/port3.png'
import ItemDisplay from '../ItemDisplay/ItemDisplay'


export default function Portfolio() {
  document.title="Portfolio";
  let imgARR = [img1, img2, img3, img1, img2, img3];
  const [selectedImg, setselectedImg] = useState('');
  function passedImg (img){
    setselectedImg(img);
  };
  return (
    <>
      <div id="portfolio" className="text-center py-5">
        <h1 className='text-uppercase'>portfolio component</h1>
        <div className=" my-3 customUnderline d-flex justify-content-center align-items-center">
          <div className="line"></div>
          <i className="fa-solid fa-star mx-3"></i>
          <div className="line"></div>
        </div>
        <div className="container">
          <div className="row gy-4">
            {imgARR = imgARR.map( (img, inx)=> <ItemDisplay img={img} alt={inx} passedImg={passedImg} selectedImg={selectedImg}/> )}
          </div>
        </div>

      </div>
    </>
  )
}
