import React from "react";
import classes from './Setting.module.css'
import ReactDOM from 'react-dom'

const Icon = (props) => {

  return (
    <div className={classes.setting} onClick={props.onHandler}>
      <i className="fa-solid fa-gear"></i>
    </div>
  );
};

const portalElement = document.getElementById('setting')

const Setting = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Icon onHandler={props.onStatusHandler}/>, portalElement)}
        </>
    )
}

export default Setting;
