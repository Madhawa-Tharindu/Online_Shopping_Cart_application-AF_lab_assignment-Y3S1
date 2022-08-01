import { v4 as uuidv4 } from "uuid";

//use map structure for data storing
const traders = new Map();

export const createProfile = ({ trader_name, email, contact_Number, address }) => {
  const tr = { id: uuidv4(), trader_name, email, contact_Number, address };
  traders.set(tr.id, tr);
  return tr;
};

//get all customers
export const getTraders = () => {
    // ... spread operator using iterate map
    return [...traders.values()];
  };
  
  //get one customer
  export const getTrader = (id) => {
    const tr = traders.get(id);
    if (!tr) {
      throw new Error("Trader Not Found");
    }
    return tr;
  };