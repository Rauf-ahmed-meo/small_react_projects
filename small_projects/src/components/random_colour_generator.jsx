import React from 'react'
import { useState } from 'react'
const Random_colour_generator = () => {
    const [typeofcolour, settypeofcolour] = useState("hex")
    const [colour, setcolour] = useState("#BBCDF3")

    function randomChoose(arr) {
         let num = Math.floor(Math.random()*arr.length)
         return arr[num]
    }
    
    function generatehex() {
        let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexColor = "#"
        for (let index = 0; index < 6; index++) {
            hexColor += randomChoose(hex)
        }
        setcolour(hexColor)
    }
    function generatergb(params) {
        let r = Math.floor(Math.random()*256)
        let g = Math.floor(Math.random()*256)
        let b = Math.floor(Math.random()*256)
        setcolour(`rgb(${r}, ${g}, ${b})`)
    }
    return (
        <div style={{backgroundColor:colour, width:"100vw", height:"100vh"}}>
            <div className="hero" style={{textAlign:"center", backgroundColor:"white"}}>RANDOM COLOUR GENERATOR</div>
            <button onClick={()=>{settypeofcolour("hex")}}>hex colour</button>
            <button onClick={()=>{settypeofcolour("rgb")}}>rgb colour</button>
            <button onClick={typeofcolour === 'hex' ?() => generatehex() : ()=>generatergb()}>Generate random colour</button>
            <div style={{width:"100vw",height:"100vh" ,display:"flex", justifyContent:"center", alignItems:"center"}}>{colour}</div>
        </div>
    )
}

export default Random_colour_generator
