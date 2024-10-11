import React from 'react'
import './Header.css';
const Header = ({setLocation }) => {

let changeLocation = (location)=>{
  setLocation(location)
}

  return (
    <header>
        <div className="title">simple_weather</div>
        <div className="locations">
            <div onClick={() => changeLocation('Kanpur')} className="location" >Kanpur</div>
            <div onClick={() => changeLocation('Delhi')} className="location" >Delhi</div>
            <div onClick={() => changeLocation('Mumbai')} className="location" >Mumbai</div>
            <div onClick={() => changeLocation('Jaipur')} className="location" >Jaipur</div>
        </div>
    </header>
  )
}

export default Header