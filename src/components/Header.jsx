import React, { useState } from "react";
import "./Header.css";

const Header = ({ setLocation }) => {
  const [menu, setMenu] = useState(false);

  const changeLocation = (location) => {
    setLocation(location);
    if (menu) toggleMenu(); // Close the menu after selecting a location
  };

  const toggleMenu = () => {
    if (window.innerWidth < 600) {
      setMenu((prevMenu) => !prevMenu);
    }
  };

  return (
    <header>
      <div className="title">simple_weather</div>
      {!menu && (
        <div onClick={toggleMenu} className="btn">
         popular cities &#10023;
        </div>
      )}

      <div className={`locations ${menu ? "locations-small" : ""}`}>
        <div onClick={() => changeLocation("Kanpur")} className="location">
          Kanpur
        </div>
        <div onClick={() => changeLocation("Delhi")} className="location">
          Delhi
        </div>
        <div onClick={() => changeLocation("Mumbai")} className="location">
          Mumbai
        </div>
        <div onClick={() => changeLocation("Jaipur")} className="location">
          Jaipur
        </div>
        {menu && (
          <div onClick={toggleMenu} className="cross">
            &#10006;
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
