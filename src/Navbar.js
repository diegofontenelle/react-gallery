import React from "react";

const Navbar = ({ onUploadClicked }) => {
  return (
    <div className="ui pointing menu">
      <div className="ui container">
        <div className="item">
          <img
            className="ui mini image"
            alt="Lux Gallery"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZEDMGCggYg7HY6L3vjac6JuYeNr9QymdQeDHS5axwvFoNU-T"
          />
        </div>
        <div className="right menu">
          <a onClick={onUploadClicked} className="ui item">
            <i className="icon user" />
            Upload image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
