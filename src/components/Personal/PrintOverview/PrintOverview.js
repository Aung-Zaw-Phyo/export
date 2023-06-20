import React from "react";
import classes from './PrintOverview.module.css'

const PrintOverview = (props) => {
  const date = new Date();
  const day = date.toLocaleString("en-Us", { day: "2-digit" });
  const month = date.toLocaleString("en-Us", { month: "long" });
  const year = date.getFullYear();
  const today = day + " " + month + " " + year;

  return (
    <div className={`${classes["print-container"]}`}>
      <div className={`${classes.date}`}>{today}</div>
      {props.items.length > 0 ? (
        <div>
          <p className={`${classes["data-item-header"]}`}>
            <span className={`${classes.name}`}>Name</span>
            <span className={`${classes.unit}`}>Unit</span>
            <span className={`${classes.cost}`}>Cost</span>
          </p>
          {props.items.map((item) => (
            <p key={item.id} className={`${classes["data-item"]}`}>
              <span className={`${classes.name}`}>{item.name}</span>
              <span className={`${classes.unit}`}>{item.unit}</span>
              <span className={`${classes.cost}`}>{item.cost}</span>
            </p>
          ))}
          <p className={`${classes["data-item-footer"]}`}>
            <span className={`${classes["total-cost"]}`}>Total Cost</span>
            <span className={`${classes.cost}`}>{props.totalCost}</span>
          </p>
        </div>
      ) : (
        <p className="text-center text-muted">Record your daily cost.</p>
      )}
    </div>
  );
};

export default PrintOverview;
