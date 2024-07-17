import React from 'react'
import { useState } from 'react'
const SideMenu_Item = ({item}) => {
  const [displayChild, setdisplayChild] = useState({})

  function toggleChildren(currentLabel){
    setdisplayChild({
      ...displayChild,
      [currentLabel]: !displayChild[currentLabel]
    })
  }
  return (
    <li className='no-style'>
      {
        <div onClick={()=>{toggleChildren(item.label)}} style={{display:"flex", alignItems:"center", gap:"20px", color:"white", fontFamily:"cursive1", fontSize:"30px"}} className='no-style'>
          <p className='no-style'>{item.label}</p>
          {
            item.children?
            displayChild[item.label]?<span>-</span>:<span>+</span>
            :null
          }
        </div>
      }
<ul className='no-style'> 
      {
        item.children && displayChild[item.label]?
        item.children.map((child)=>{
          return <SideMenu_Item item={child}/>
        })
        :null
      }

</ul>
    </li>
  )
}

export default SideMenu_Item
