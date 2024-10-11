import React, { useState } from 'react'
import './Header.css';
const Header = ({setLocation }) => {

let changeLocation = (location)=>{
  setLocation(location)
}
  const [menu, setmenu] = useState(false);

  let  toggleMenu = () => {
    setmenu((e)=>{
      return !e
    })
    let menu = document.querySelector('.locations');
    menu.classList.toggle('locations-small');
    console.log('djcx');
}



  return (
    <header>
        <div className="title"> simple_weather</div>
        {!menu?<div onClick={toggleMenu} className="btn">&#10023;popular cities&#10023;</div>: null}

        <div className="locations">
            <div onClick={() => {changeLocation('Kanpur')
              toggleMenu()
            }} className="location" >Kanpur</div>
            <div onClick={() => {changeLocation('Delhi')
              toggleMenu()}
            } className="location" >Delhi</div>
            <div onClick={() => {changeLocation('Mumbai')
              toggleMenu()}
            } className="location" >Mumbai</div>
            <div onClick={() => {changeLocation('Jaipur')
              toggleMenu()}
            } className="location" >Jaipur</div>
            {menu ?<div onClick={toggleMenu} className="cross">&#10006;</div>: null}
        </div>
    </header>
  )
}

export default Header