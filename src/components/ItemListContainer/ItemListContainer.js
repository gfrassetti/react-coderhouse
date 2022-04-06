import React from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList.js/ItemList";

const ItemListContainer = (props) => {
  const { title } = props;
  return (
    <>
      <div className="item-list">
        <h2 className="h2-itemlistcontainer">{title}</h2>
        <ItemList />
      </div>
    </>
  );
};

export default ItemListContainer;
