import React, { useState, useEffect } from "react";

import NavBar from "./navbar";

function Purchase_Item() {
  const [items, set_Items] = useState([]);
  const loadItem = async () => {
    const response = await fetch("http://localhost:9000/purchase/items");
    const data = await response.json();

    set_Items(data);
  };

  useEffect(() => {
    loadItem();
  }, []);

  const content = items.map((item) => (
    <div
      key={item.id}
      style={{
        top: "50%",
        width: "100%",
        textAlign: "center",

        border: "green 1px solid ",
      }}
    >
      <h3>Product : {item.item_name}</h3>

      <p>Price :Rs.{item.item_price}</p>
    </div>
  ));

  return (
    <div>
      <NavBar />

      <div>{content}</div>
    </div>
  );
}

export default Purchase_Item;