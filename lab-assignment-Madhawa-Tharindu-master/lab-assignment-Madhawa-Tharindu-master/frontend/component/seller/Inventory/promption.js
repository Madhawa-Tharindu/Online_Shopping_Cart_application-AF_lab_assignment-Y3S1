import { React, useState, useEffect } from "react";
import Navbar from "../../../component/navbar";

function Promotion() {
  const [promo_name, setName] = useState("");
  const [promo_discount, setDiscount] = useState("");
  const [promo_startDate, setStartDate] = useState("");
  const [promo_endDate, setEndDate] = useState("");

  const [promo_message, setMessage] = useState("");
  //name, discount, startDate, endDate;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:9000/promotion/create", {
        method: "POST",

        body: JSON.stringify({
          name: promo_name,
          discount: promo_discount,
          startDate: promo_startDate,
          endDate: promo_endDate,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const resJson = await res.json();

      if (res.status === 201) {
        setMessage("Promotion Added Successfully");
      } else {
        setMessage("Some Error occured");
      }
    } catch (e) {
      console.log(e);
    }
  };

  //Available promotions
  const [promotions, setPromotions] = useState([]);
  const loadItem = async () => {
    const response = await fetch("http://localhost:9000/promotion/getAll");
    const data = await response.json();

    setPromotions(data);
  };

  useEffect(() => {
    loadItem();
  }, []);

  const destroy = (id) => {
    fetch(`http://localhost:9000/promotion/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (window.confirm("Do u want to continue?")) {
        window.location.href = "/promotion";
      }
    });
  };

  const content = promotions.map((item) => (
    <div key={item.id} style={{}}>
      <h3>Promotions : {item.name}</h3>
      <h5>Discount {item.discount}</h5>
      <p>Start Date: {item.startDate}</p>
      <p>End Date : {item.endDate}</p>

      <button onClick={() => destroy(item.id)}>End Promotion</button>
      <br></br>
      <br></br>
    </div>
  ));

  return (
    <div>
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
          <label>Discount : </label>
          <br></br>
          <input
            type="text"
            name="discount"
            onChange={(e) => setDiscount(e.target.value)}
            required
          ></input>
          <br />
          <label>start Date :</label>
          <br></br>
          <input
            type="date"
            name="startDate"
            onChange={(e) => setStartDate(e.target.value)}
            required
          ></input>
          <br></br>
          <label>End Date : </label>
          <br></br>
          <input
            type="date"
            name="endDate"
            onChange={(e) => setEndDate(e.target.value)}
            required
          ></input>
          <br></br>

          <br></br>
          <button type="submit">Insert Promotion</button>
          <div>
            <h2>{message ? <p>{promo_message}</p> : null}</h2>
          </div>
        </form>
      </div>

      <h2>Available Promotions</h2>
      <div>{content}</div>
    </div>
  );
}

export default Promotion;
