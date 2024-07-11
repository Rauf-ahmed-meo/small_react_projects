import React from 'react'
import "../../src/imgSlider.css"
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa6";

import { useState, useEffect } from 'react'
const Image_slider = () => {
  const [images, setimages] = useState([])
  let [imgnum, setimgnum] = useState(0)
  useEffect(() => {  
    const data = async () => {
      let d =  await fetch("https://picsum.photos/v2/list?page=1&limit=5")
      let res = await d.json()
      setimages(res)
    }
    data()
  }, [])

  return (
    <div className="actual">
      <h1 style={{textAlign:"center", marginTop:"12vh", position:"absolute", width:"100%"}}>IMAGE SLIDER</h1>
    <div className='carusel'>
      <div className="real">
        <CiCircleChevLeft className='left' style={{fontSize:"7vw", color:"white"}} onClick={imgnum === 0?()=>{setimgnum(images.length-1)}:()=>{setimgnum(imgnum - 1)}}/>
      {images.length?
        images.map((item, index)=>{
          return (
            <div>
            {index === imgnum? <img src={item.download_url} alt=""/>: null}
            <ul>
        {images.map((item, index) => (
          <li key={item.id}>
            <FaRegCircle id='poscircle' className={index === imgnum ? "white" : "black"} onClick={() => { setimgnum(index) }} />
          </li>
        ))}
      </ul>
            </div>
          )
        }):
        "data loading..."
      }

      <CiCircleChevRight className='right' style={{fontSize:"7vw", color:"white"}} onClick={images.length - 1 <= imgnum ? ()=>setimgnum(0):()=>setimgnum(imgnum + 1) }/>
      </div>
    </div>
    </div>
  )
}


//[0,1,2,3,4]
//0 - 4


// {images.length > 0?<img src={images[1].download_url} alt="" style={{border:"2px solid black"}}/>:"na"}
export default Image_slider
// https://picsum.photos/v2/list?page=1&limit=5
