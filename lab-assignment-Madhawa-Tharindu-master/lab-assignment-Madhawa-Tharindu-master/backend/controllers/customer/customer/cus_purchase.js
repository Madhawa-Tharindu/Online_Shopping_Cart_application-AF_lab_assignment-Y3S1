const purchases = new Map();
//add item to cart
export const addToPurchase = ({
  item_id,
  item_name,
  item_price,
  customer_Name,
  customer_Address,
}) => {
  const purchase = { item_id, item_name, item_price, customer_Name, customer_Address };
  purchases.set(purchase.itemid, purchase);
  return purchase;
};

//Get all items
export const getPurchaseItems = () => {
  return [...purchases.values()];
};