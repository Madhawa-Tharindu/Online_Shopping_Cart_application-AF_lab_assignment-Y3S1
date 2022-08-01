import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../component/navbar";
function Inventory() {
  const [items, setItems] = useState([]);

  const load_Item = async () => {
    const response = await fetch("http://localhost:9000/item/getitems");
    const data = await response.json();

    setItems(data);
  };

  useEffect(() => {
    load_Item();
  }, []);

  const destroy = (id) => {
    fetch(`http://localhost:9000/item/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (window.confirm("Do you want to continue?")) {
        window.location.href = "/inventory";
      }
    });
  };

  const content = items.map((item) => (
    <div key={item.id} style={{ border: "0.5px solid green" }}>
      <h3>Product : {item.item_name}</h3>
      <h5>{item.item_description}</h5>
      <p>Quantity : {item.item_quantity}</p>
      <p>Category : {item.item_category}</p>
      <p>Price :Rs.{item.item_price}</p>

      <Link to={`/inventory/edit/${item.item_id}`}>
        <button>Edit</button>
      </Link>

      <button onClick={() => destroy(item.item_id)}>Delete</button>
      <br></br>
      <br></br>
    </div>
  ));

  return (
    <div>
      <Navbar />
      <div>{content}</div>
    </div>
  );
}

export default Inventory;