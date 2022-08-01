import React, { useState, useEffect } from "react";

import NavBar from "./navbar";
function ItemPage() {
  const [message, setMessage] = useState("");
  

  handleCart = async (item_id, item_name, item_price) => {
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
        setMessage("Item Add to Cart Successfully");
      } else {
        setMessage("Some Error occured");
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleWishlist = async (item_id, item_name, item_price) => {
    try {
      console.log(id);
      const res = await fetch("http://localhost:9000/wishlist/create", {
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
        setMessage("Item Add to Wishlist Successfully");
      } else {
        setMessage("Some Error occured");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const [items, setItems] = useState([]);

  const loadItem = async () => {
    const response = await fetch("http://localhost:9000/item/getitems");
    const data = await response.json();

    setItems(data);
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
        padding: "40px 40px 40px 40px",
      }}
    >
      <h3>Product : {item.item_name}</h3>
      <h5>{item.item_description}</h5>
      <p>Quantity : {item.item_quantity}</p>
      <p>Category : {item.item_category}</p>
      <p>Price :Rs.{item.item_price}</p>

      <button onClick={() => handle_Cart(item.item_id, item.item_name, item.item_price)}>
        Add to Cart
      </button>

      <br></br>
      <br />

      <button onClick={() => handle_Wish_list(item.item_id, item.item_name, item.item_price)}>
        Add to WishList
      </button>

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
    </div>
  );
}

export default ItemPage;