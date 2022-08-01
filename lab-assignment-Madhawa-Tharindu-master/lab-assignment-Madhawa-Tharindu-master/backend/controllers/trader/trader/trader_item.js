import { v4 as uuidv4 } from "uuid";

const items = new Map();

export const createItem = ({
  item_name,
  item_description,
  item_quantity,
  item_category,
  item_price,
}) => {
  const item = { id: uuidv4(), item_name, item_description, item_quantity, item_category, item_price };
  items.set(item.id, item);
  return item;
};
//
//Get all items
export const getItems = () => {
  return [...items.values()];
};

//get one item
export const getItem = (id) => {
  const item = items.get(id);
  if (!item) {
    throw new Error(`not found ${id}`);
  }
  return item;
};

//////
//update items
export const updateItem = (
    id,
    { item_Id, item_name, item_description, item_quantity, item_category, item_price }
  ) => {
    if (!items.has(id)) {
      throw new Error(`not found ${id}`);
    } else {
      const item = {
        id,
        item_Id,
        item_name,
        item_description,
        item_quantity,
        item_category,
        item_price,
      };
      //add map with key value pair
      items.set(item.id, item);
      return item;
    }
  };
  
  //delete item
  
  export const deleteItem = (id) => {
    items.delete(id);
  };

