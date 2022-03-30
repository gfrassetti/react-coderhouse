import React from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList.js/ItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemListContainer = (props) => {
  const { title } = props;
  return (
    <>
      <div className="item-list">
        <h2 className="h2-itemlistcontainer">{title}</h2>
        <ItemList />
        <hr></hr>
        <ItemDetailContainer />
      </div>
    </>
  );
};

export default ItemListContainer;
