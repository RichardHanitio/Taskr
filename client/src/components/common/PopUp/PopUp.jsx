import React from "react";
import Popup from "reactjs-popup";
import "./popup.scss";

const PopUp = ({open, close, children, image}) => {

  return (
    <Popup open={open} closeOnDocumentClick onClose={close}>
      {/* {console.log(open)} */}
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="popup-container" >
          <div className="popup-image-container">
            <img src={image} className="popup-image"/>
          </div>
          <div className="popup-caption">{children}</div>
        </div>
      </div>
    </Popup>
  );
};

export default PopUp;