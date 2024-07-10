import React from 'react'
import { useState } from 'react'
import {FaStar} from "react-icons/fa"
const Star_rating = ({noOfele = 5}) => {
  const [hover, sethover] = useState(null)
  const [selected, setselected] = useState(null)
  function handlemove(i) {
    sethover(i)
  }
  function handleleave(i) {
    sethover(i)
  }
  function handleClick(i){
    setselected(i)
  }
  return (
    <div className="wrapper"  style={{border:"2px solid black"}}>
      STAR RATING
    <div className="starRating">
      
      {
        [...Array(noOfele)].map((item, index)=>{
          return <FaStar
          className={index <= (hover || selected)?"active stars":"inactive stars"}
          onMouseMove={()=>{handlemove(index)}}
          onMouseLeave={()=>{handleleave(index)}}
          onClick={()=>{handleClick(index)}}
          />
        })
      }
    </div>
    </div>
  )
}

export default Star_rating
