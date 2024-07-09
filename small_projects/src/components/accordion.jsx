import React from 'react'
import data from '../../public/data'
import "../../src/App.css"
import { useState } from 'react'
const Accordion = () => {
  const [selcted, setselcted] = useState(null)
  const [multipleselection, setmultipleselection] = useState(false)
  const [selecteditems, setselecteditems] = useState([])
  // const [multipleselected, setmultipleselected] = useState([])
  // let selecteditems = []
  function handleSingleSelection(getselcteditemid) {
    setselcted(getselcteditemid === selcted ? null : getselcteditemid)
  }



  function handleMultipleSelection(selectedItemsId) {
    if (selecteditems.includes(selectedItemsId)) {
      setselecteditems(previtems => previtems.filter(item => item !== selectedItemsId))
    }else{
      setselecteditems(previtems => [...previtems, selectedItemsId])
    }
  }




  function itemchecker(arr, num) {
    let present = false
    for (let index = 0; index < arr.length; index++) {
      if (arr[index]===num) {
        present = true
        break
      }
    }
    return present
  }

  return (
    <div className='wrapper'>
      <button onClick={() => setmultipleselection(!multipleselection)}>{multipleselection ? "enable single selection" : "enable multiple selection"}</button>
      {data.length > 0 ?
        data.map(item => <div className='accordion'>
          <div className="top" onClick={multipleselection ? () => { handleMultipleSelection(item.id) } : () => handleSingleSelection(item.id)}>
            <div>{item.question}</div>
            <span>{selcted === item.id ? "-" : "+"}</span>
            <div className="answer">
              {multipleselection?itemchecker(selecteditems, item.id)?<div>{item.answer}</div>:null:selcted === item.id ? <div>{item.answer}</div> : null}
            </div>
          </div>
        </div>)
        : "data not found"}
    </div>
  )
}

export default Accordion
