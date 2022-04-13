import React, { useState, useContext } from "react";
import "./ItemCount.css";

const ItemCount = (prop) => {
  const { stock, name, initial, onAdd } = prop;


  let [count, setCount] = useState(initial);

  const addtItem = () => {
    count < stock
      ? setCount(count + 1)
      : console.log(`El stock es de ${stock}`);
  };

  const removeItem = () => {
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
        <button className="btn btn-primary" onClick={() => onAdd(count)}>
          Agregar
        </button>
      </div>
    </>
  );
};

export default ItemCount;
