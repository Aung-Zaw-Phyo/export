import React, { useEffect, useState, useReducer } from "react";
import Header from "../UI/Header/Header";
import TableForm from "./TableForm/TableForm";
import Info from "./Info/Info";
import Setting from "./Setting/Setting";
import PrintOverview from './PrintOverview/PrintOverview'

const itemsReducer = (state, action) => {
  if (action.type === "SET_ITEM") {
    const items = action.val;
    const totalCost = items.reduce((prevValue, item) => {
      return prevValue + (+item.amount);
    }, 0);
    return {
      items,
      totalCost,
    };
  }
  return state;
};

const Company = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [itemsState, dispatchItems] = useReducer(itemsReducer, {
    items: [],
    totalCost: 0,
  });

  useEffect(() => {
    const infoFromDB = localStorage.getItem("info");
    if (infoFromDB) {
      setShowInfo(false);
    }
  }, []);

  const showInfoStatusHandler = () => {
    setShowInfo((prevState) => !prevState);
  };

  const setItems = (data_arr) => {
    dispatchItems({
      type: "SET_ITEM",
      val: data_arr,
    });
  };

  return (
    <>
      <Setting onStatusHandler={showInfoStatusHandler} />
      <Header />
      <div className="container py-3">
        {showInfo && <Info />}
        <div className="row g-2">
          <div className="col-lg-6 p-3">
            <TableForm onSetItems={setItems} />
          </div>
          <div className="col-lg-6 p-3">
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

export default Company;
