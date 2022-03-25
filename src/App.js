import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer title="Shopping items" />
    </div>
  );
};

export default App;
