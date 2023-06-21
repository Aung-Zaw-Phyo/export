import React, { useState } from "react";
import classes from "./TableForm.module.css";

const TableForm = (props) => {
  const [inputs, setInputs] = useState([0]);

  const addInputHandler = (e) => {
    const inputNo = +e.target.id;
    const inputVal = e.target.value;
    if (inputNo === inputs.length - 1 && inputVal.length === 1) {
      setInputs((prevState) => [...prevState, inputNo + 1]);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = formData.entries();
    const data = Object.fromEntries(entries);
    let data_arr = [];
    for (let i = 0; i < inputs.length; i++) {

      if (data[`item-${i}`].length > 0 && data[`price-${i}`].length > 0 && (+data[`price-${i}`]) > 0) {
        let obj = {};
        obj.item = data[`item-${i}`];
        obj.price = data[`price-${i}`];
        obj.unit = data[`unit-${i}`];
        obj.amount = (+data[`unit-${i}`]) * (+data[`price-${i}`])
        obj.id = Math.random().toString();

        data_arr.push(obj);
      }
    }
    props.onSetItems(data_arr);
  };

  const clear = () => {
    setInputs([])
    setTimeout(() => setInputs(prevState => [0]), 500)
  }

  return (
    <div className="border-0 p-3 shadow bg-light">
      <form onSubmit={submitHandler} autoComplete="off">
        <table className="table table-sm table-bordered text-center border-dark">
          <thead>
            <tr>
              <th className="text-start py-2">Item</th>
              <th className="text-end py-2">Price</th>
              <th className="text-end py-2">Unit</th>
            </tr>
          </thead>
          <tbody>
            {inputs.map((input) => {
              return (
                <tr key={input}>
                  <td className="">
                    <input
                      name={`item-${input}`}
                      id={`${input}`}
                      onChange={addInputHandler}
                      className={`form-control ${classes["table-input"]}`}
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      name={`price-${input}`}
                      multiple
                      className={`form-control ${classes["table-input"]} text-end`}
                      type="number"
                      step="1" min="0"
                    />
                  </td>
                  <td>
                    <input
                      name={`unit-${input}`}
                      multiple
                      className={`form-control ${classes["table-input"]} text-end`}
                      type="number"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className={classes.button}>Confirm</button>
      </form>
      {
        inputs.length > 1 && <button className={`${classes.button} mt-3`} onClick={clear}>Clear Data</button>
      }
    </div>
  );
};

export default TableForm;
