import React from "react";
import Navbar from "../../../component/navbar";
import React, { useState, useEffect } from "react";
function ViewCustomers() {
  const [items, set_Items] = useState([]);

  const load_Item = async () => {
    const response = await fetch("http://localhost:9000/purchase/items");
    const data = await response.json();

    set_Items(data);
  };

  useEffect(() => {
    load_Item();
  }, []);
  const content = items.map((item) => (
    <div
      key={item.item_id}
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
      <Navbar></Navbar>
      <div>{content}</div>
    </div>
  );
}

export default ViewCustomers;