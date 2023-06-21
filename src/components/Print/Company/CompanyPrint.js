import React, { forwardRef } from "react";
import classes from "./CompanyPrint.module.css";

export const CompanyPrintFun = React.forwardRef((props, ref) => {
  const date = new Date();
  const day = date.toLocaleString("en-Us", { day: "2-digit" });
  const month = date.toLocaleString("en-Us", { month: "long" });
  const year = date.getFullYear();
  const today = day + " " + month + " " + year;
  const infoFromDB = localStorage.getItem('info') 
  const info = JSON.parse(infoFromDB)
  return (
    <div ref={ref}>
      <div className={`${classes["print-container"]}`}>
        <div className={`${classes.date}`}>{today}</div>
        <div className={classes.info}>
          <h5>{info.name}</h5>
          <p>{info.address1}</p>
          <p>{info.address2}</p>
          <p>
            <span>Phone</span> - <span>{info.phone}</span>
          </p>
        </div>
        <div>
          <p className={`${classes["data-item-header"]}`}>
            <span className={`${classes.name}`}>Item</span>
            <span className={`${classes.cost}`}>Price</span>
            <span className={`${classes.unit}`}>Unit</span>
            <span className={`${classes.amount}`}>Amount</span>
          </p>
          {props.items.map((item) => (
            <p key={item.id} className={`${classes["data-item"]}`}>
              <span className={`${classes.name}`}>{item.item}</span>
              <span className={`${classes.cost}`}>{item.price}</span>
              <span className={`${classes.unit}`}>{item.unit}</span>
              <span className={`${classes.amount}`}>{item.amount}</span>
            </p>
          ))}
          <p className={`${classes["data-item-footer"]}`}>
            <span className={`${classes["total-cost"]}`}>Total Cost</span>
            <span className={`${classes.cost}`}>{props.totalCost}</span>
          </p>
        </div>
      </div>
    </div>
  );
});

// export class PersonalPrintClass extends React.PureComponent {
//   render() {
//     return <div>My cool content here!</div>;
//   }
// }
