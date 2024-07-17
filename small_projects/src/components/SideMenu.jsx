import React from 'react'
import MenuData from '../../public/sideMenuData'
import SideMenu_Item from './SideMenu_Item'
const SideMenu = () => {
  return (
    <div className='no-style'>    <ul style={{backgroundColor:"blue", width:"fit-content", height:"80vh", padding:"20px", display:"block"}} className='no-style'>
      SIDEMENU
      {
        MenuData.map((item)=>{
          return <SideMenu_Item item={item}/>
          
        })
      }
    </ul>

    </div>
  )
}

export default SideMenu
