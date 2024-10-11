import React, { useState } from 'react'
import './Search.css'
const Search = ({setLocation}) => {
const [input, setinput] = useState("")

let changeInput = (e)=>{
    setinput(e.target.value)
}

  return (
    
    <div className="search">
        <input onChange={changeInput}  type="text" placeholder="Enter City Name" value={input}/>
        <button onClick={()=>{
            setinput('')
            setLocation(input)
        }}>Search</button>
        </div>
        
    
  )
}

export default Search