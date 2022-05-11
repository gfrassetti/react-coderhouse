import React, { useState } from "react";
import "./ItemCount.css";
import Toast from "../Toast/Toast";

const ItemCount = (prop) => {
  const { stock, name, initial, onAdd } = prop;

  let [count, setCount] = useState(initial);

  const addtItem = (e) => {
    e.stopPropagation();
    count < stock
      ? setCount(count + 1)
      : console.log(`El stock es de ${stock}`);
  };

  const removeItem = (e) => {
    e.stopPropagation();
    count > initial
      ? setCount(count - 1)
      : console.log(`El stock minimo es de 1 unidad`);
  };

  return (
    <>
      <div className="card-footer">
        <p>{name}</p>
        <div className="div-quantity">
          <button className="btn" onClick={removeItem}>
            -
          </button>
          <span>{count}</span>
          <button className="btn" onClick={addtItem}>
            +
          </button>
        </div>
        <Toast
          className="btn btn-primary"
          onClick={(e) => onAdd(e, count)}
          name={name}
        />
      </div>
    </>
  );
};

export default ItemCount;
