const carts = new Map();

//add item to cart
export const addToCart = ({ item_id, item_name, item_price }) => {
  const cart = { item_id, item_name, item_price };
  carts.set(cart.item_id, cart);
  return cart;
};

//Get all items
export const getItems = () => {
  return [...carts.values()];
};

//get one item
export const getItem = (id) => {
  const item = carts.get(id);
  if (!item) {
    throw new Error(`not found ${id}`);
  }
  return item;
};

//remove items from cart
export const deleteFromCart = (id) => {
  carts.delete(id);
};

export const purchase = () => {
  return [...carts.values()];
};