import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../component/navbar";
function InventoryEdit() {
  const params = useParams();
  const [item_name, setName] = useState("");
  const [item_price, setPrice] = useState("");
  const [item_quantity, setQuantity] = useState("");
  const [item_category, setCategory] = useState("");
  const [item_description, setDescription] = useState("");
  const [item_id, setId] = useState("");
  const [item_message, setMessage] = useState("");

  const init = async () => {
    const response = await fetch(`http://localhost:9000/item/${params.id}`);
    const data = await response.json();
    setName(data.item_name);
    setPrice(data.item_price);
    setQuantity(data.item_quantity);
    setCategory(data.item_category);
    setDescription(data.item_description);
    setId(data.item_id);
  };
  useEffect(() => {
    init();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:9000/item/update/${params.id}`,
        {
          method: "PUT",

          body: JSON.stringify({
            id: item_id,
            name: item_name,
            description: item_description,
            quantity: item_quantity,
            category: item_category,
            price: item_price,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const resJson = await res.json();
      if (res.status === 201) {
        setName("");
        setPrice("");
        setQuantity("");
        setCategory("");
        setDescription("");
        setMessage("Item Updated Successfully");
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
          value={item_name}
          required
        />
        <br />
        <label>Description : </label>
        <br></br>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={item_description}
          required
        ></input>
        <br />
        <label>Quantity :</label>
        <br></br>
        <input
          type="text"
          name="quantity"
          onChange={(e) => setQuantity(e.target.value)}
          value={item_quantity}
          required
        ></input>
        <br></br>
        <label>Category : </label>
        <br></br>
        <input
          type="text"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          value={item_category}
          required
        ></input>
        <br></br>
        <label>Price : </label>
        <br></br>
        <input
          type="text"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={item_price}
          required
        ></input>
        <br></br>
        <br></br>
        <button type="submit">Update Item</button>
        <div>
          <h2>{message ? <p>{item_message}</p> : null}</h2>
        </div>
      </form>
    </div>
  );
}

export default InventoryEdit;