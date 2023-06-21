import React from "react";
import classes from "./Example.module.css";

const Example = () => {
  const date = new Date();
  const day = date.toLocaleString("en-Us", { day: "2-digit" });
  const month = date.toLocaleString("en-Us", { month: "long" });
  const year = date.getFullYear();
  const today = day + " " + month + " " + year;
  
  return (
    <div className={`${classes["print-container"]}`}>
      <div className={classes.example}>Example</div>
      <div className={`${classes.date}`}>{today}</div>
      <div className="text-center">
        <h5 className="mb-0">ABC Co.</h5>
        <p className="mb-0">No. 123, Khayae Street, Kyan Sit Thar Road</p>
        <p className="mb-0">Hlaing, Yangon</p>
        <p><span>Phone</span> - <span>09123456789</span></p>
      </div>
      <div>
        <p className={`${classes["data-item-header"]}`}>
          <span className={`${classes.name}`}>Item</span>
          <span className={`${classes.cost}`}>Price</span>
          <span className={`${classes.unit}`}>Unit</span>
          <span className={`${classes.amount}`}>Amount</span>
        </p>
        <p className={`${classes["data-item"]}`}>
          <span className={`${classes.name}`}>Apple</span>
          <span className={`${classes.cost}`}>800</span>
          <span className={`${classes.unit}`}>3</span>
          <span className={`${classes.amount}`}>2400</span>
        </p>
        <p className={`${classes["data-item"]}`}>
          <span className={`${classes.name}`}>Mango</span>
          <span className={`${classes.cost}`}>500</span>
          <span className={`${classes.unit}`}>5</span>
          <span className={`${classes.amount}`}>2500</span>
        </p>
        <p className={`${classes["data-item"]}`}>
          <span className={`${classes.name}`}>Orange</span>
          <span className={`${classes.cost}`}>1000</span>
          <span className={`${classes.unit}`}>3</span>
          <span className={`${classes.amount}`}>3000</span>
        </p>
        <p className={`${classes["data-item-footer"]}`}>
          <span className={`${classes["total-cost"]}`}>Total Cost</span>
          <span className={`${classes.cost}`}>7900</span>
        </p>
      </div>
    </div>
  );
};

export default Example;
