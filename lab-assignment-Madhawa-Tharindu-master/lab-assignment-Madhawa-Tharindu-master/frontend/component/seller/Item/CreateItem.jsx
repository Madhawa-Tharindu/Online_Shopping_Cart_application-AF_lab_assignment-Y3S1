import { React, useState, useEffect } from "react";
import Navbar from "../../../component/navbar";
function CreateItem() {
  const [item_name, setName] = useState("");
  const [item_price, setPrice] = useState("");
  const [item_quantity, setQuantity] = useState("");
  const [item_category, setCategory] = useState("");
  const [item_description, setDescription] = useState("");
  const [item_message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:9000/item/create", {
        method: "POST",

        body: JSON.stringify({
          name: item_name,
          description: item_description,
          quantity: item_quantity,
          category: item_category,
          price: item_price,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const resJson = await res.json();

      if (res.status === 201) {
        setMessage("Item Added Successfully");
      } else {
        setMessage("Some Error occured");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        style={{
          left: "45%",

          position: "absolute",
        }}
      >
        <label>Name :</label>
        <br></br>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label>Description : </label>
        <br></br>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          required
        ></input>
        <br />
        <label>Quantity :</label>
        <br></br>
        <input
          type="text"
          name="quantity"
          onChange={(e) => setQuantity(e.target.value)}
          required
        ></input>
        <br></br>
        <label>Category : </label>
        <br></br>
        <input
          type="text"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          required
        ></input>
        <br></br>
        <label>Price : </label>
        <br></br>
        <input
          type="text"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          required
        ></input>
        <br></br>
        <br></br>
        <button type="submit">Insert Item</button>
        <div>
          <h2>{message ? <p>{item_message}</p> : null}</h2>
        </div>
      </form>
    </div>
  );
}

export default CreateItem;