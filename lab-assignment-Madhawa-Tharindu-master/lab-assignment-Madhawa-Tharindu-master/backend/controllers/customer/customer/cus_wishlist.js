const wishlists = new Map();

//add items to wishlist
export const addToWishlist = ({ item_id, item_name, item_price }) => {
  const wishlist = { item_id, item_name, item_price };
  wishlists.set(wishlist.id, wishlist);
  return wishlist;
};
export const getItems = () => {
  return [...wishlists.values()];
};

//remove item from wishlist
export const deleteFromWishlist = (id) => {
  wishlists.delete(id);
};