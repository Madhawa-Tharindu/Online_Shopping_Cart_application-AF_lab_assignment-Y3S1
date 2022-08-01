import React, { useState, useEffect } from "react";

import NavBar from "./navbar";

import React from "react";

function WishList() {
  const [items, set_Items] = useState([]);
  const [message, set_Message] = useState("");

  const addToCart = async (item_id, item_name, item_price) => {
    try {
      console.log(id);
      const res = await fetch("http://localhost:9000/cart/create", {
        method: "POST",

        body: JSON.stringify({
          itemid: item_id,
          name: item_name,
          price: item_price,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const resJson = await res.json();

      if (res.status === 201) {
        set_Message("Item Successfully add to cart");
      } else {
        set_Message("Error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const loadItem = async () => {
    const response = await fetch("http://localhost:9000/wishlist/getitems");
    const data = await response.json();

    set_Items(data);
  };

  useEffect(() => {
    loadItem();
  }, []);

  const destroy = (id) => {
    console.log(id);
    fetch(`http://localhost:9000/wishlist/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (window.confirm("Do you want to continue?")) {
        window.location.href = "/wishlist";
      }
    });
  };

  const content = items.map((item) => (
    <div key={item.item_id} style={{ border: "0.5px solid green" }}>
      <h3>Product : {item.item_name}</h3>

      <p>Price :Rs.{item.item_price}</p>

      <button onClick={() => addToCart(item.item_id, item.item_name, item.item_price)}>
        Add to Cart
      </button>

      <button onClick={() => destroy(item.item_id)}>Remove</button>
      <br></br>
      <br></br>
    </div>
  ));

  return (
    <div>
      <NavBar />
      <div>
        <h2>{message ? <p>{message}</p> : null}</h2>
      </div>
      <div>{content}</div>
      <br />
      <br />
    </div>
  );
}

export default WishList;