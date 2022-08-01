import React, { useState, useEffect } from "react";

import NavBar from "./navbar";

import React from "react";

function MyCart() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("");
  const handle_Purchase = async (item_id, item_name, item_price) => {
    try {
      console.log(id);
      const res = await fetch("http://localhost:9000/purchase/create", {
        method: "POST",

        body: JSON.stringify({
          item_id: item_id,
          item_name: item_name,
          item_price: item_price,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const resJson = await res.json();

      if (res.status === 201) {
        setMessage("Item Purchased Successfully");
      } else {
        setMessage("Some Error occured");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const loadItem = async () => {
    const response = await fetch("http://localhost:9000/cart/getitems");
    const data = await response.json();

    setItems(data);
  };

  useEffect(() => {
    loadItem();
  }, []);

  const content = items.map((item) => (
    <div key={item.item_id} style={{ border: "0.5px solid green" }}>
      <h3>Product : {item.item_name}</h3>

      <p>Price :Rs.{item.item_price}</p>

      <button
        onClick={() => handle_Purchase(item.item_id, item.item_name, item.item_price)}
      >
        Purchase
      </button>

      <button onClick={() => destroy(item.item_id)}>Remove</button>
      <br></br>
      <br></br>
    </div>
  ));
  const destroy = (id) => {
    console.log(id);
    fetch(`http://localhost:9000/cart/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (window.confirm("Do u want to continue?")) {
        window.location.href = "/cart";
      }
    });
  };
  return (
    <div>
      <NavBar />
      <div>
        <h2>{message ? <p>{message}</p> : null}</h2>
      </div>
      <div>{content}</div>
      <br />
      <br />
      <button>Purchase All</button>
    </div>
  );
}

export default MyCart;