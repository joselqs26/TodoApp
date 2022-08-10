import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

function Modal({ openModal, children }) {
  return ReactDOM.createPortal(
    // <React.Fragment>
    //     {
    //         (openModal) ?
    //             <div className={`bg-modal ${openModal ? 'display' : ''}`}>
    //                 {children}
    //             </div>
    //         : ''
    //     }
    // </React.Fragment> ,
    <div className={`bg-modal ${openModal ? "display" : "noDisplay"}`}>{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
