import React, { useReducer } from "react";
import classes from "./Personal.module.css";
import TableForm from "./TableForm/TableForm";
import PrintOverview from "./PrintOverview/PrintOverview";
import Header from "../UI/Header/Header";

const itemsReducer = (state, action) => {
  if (action.type === "SET_ITEM") {
    const items = action.val;
    const totalCost = items.reduce((prevValue, item) => {
      return prevValue + +item.cost;
    }, 0);
    return {
      items,
      totalCost,
    };
  }
  return state;
};

const Personal = () => {
  const [itemsState, dispatchItems] = useReducer(itemsReducer, {
    items: [],
    totalCost: 0,
  });

  const setItems = (data_arr) => {
    dispatchItems({
      type: "SET_ITEM",
      val: data_arr,
    });
  };

  return (
    <>
      <Header/>
      <div className="container py-3">
        <div className="row g-2">
          <div className="col-lg-6 p-3">
            <TableForm onSetItems={setItems} />
          </div>
          <div className={`col-lg-6 p-3 ${classes["right-col"]}`}>
            <PrintOverview
              items={itemsState.items}
              totalCost={itemsState.totalCost}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
