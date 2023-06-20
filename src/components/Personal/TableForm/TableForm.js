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

      if (data[`name-${i}`].length > 0 && (+data[`cost-${i}`]) > 0) {
        let obj = {};
        obj.name = data[`name-${i}`];
        obj.unit = data[`unit-${i}`];
        obj.cost = data[`cost-${i}`];
        obj.id = Math.random().toString();

        data_arr.push(obj);
      }
    }
    props.onSetItems(data_arr);
  };
  return (
    <div className="border-0 p-3 shadow bg-light">
      <form onSubmit={submitHandler} autoComplete="off">
        <table className="table table-sm table-bordered text-center border-dark">
          <thead>
            <tr>
              <th className="text-start">Name</th>
              <th className="text-end">Unit</th>
              <th className="text-end">Cost</th>
            </tr>
          </thead>
          <tbody>
            {inputs.map((input) => {
              return (
                <tr key={input}>
                  <td className="">
                    <input
                      name={`name-${input}`}
                      id={`${input}`}
                      onChange={addInputHandler}
                      className={`form-control ${classes["table-input"]}`}
                      type="text"
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
                  <td>
                    <input
                      name={`cost-${input}`}
                      multiple
                      className={`form-control ${classes["table-input"]} text-end`}
                      type="number"
                      step="1" min="0"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className={classes.button}>Submit</button>
      </form>
    </div>
  );
};

export default TableForm;
