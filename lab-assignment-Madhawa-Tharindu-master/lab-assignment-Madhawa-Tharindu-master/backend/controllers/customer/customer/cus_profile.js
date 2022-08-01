import { v4 as uuidv4 } from "uuid";

//use map structure for storing data
const customers = new Map();

export const createProfile = ({ customer_name, email, contact_Number, address }) => {
  const cus = { id: uuidv4(), customer_name, email, contact_Number, address };
  customers.set(cus.id, cus);
  return cus;
};
////
//get all customers
export const getCustomers = () => {
    // ... spread operator using iterate map
    return [...customers.values()];
  };
  
  //get one customer
  export const getCustomer = (id) => {
    const cus = customers.get(id);
    if (!cus) {
      throw new Error("Customer Not Found");
    }
    return cus;
  };