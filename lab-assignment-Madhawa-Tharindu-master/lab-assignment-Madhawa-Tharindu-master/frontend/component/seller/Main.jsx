import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Trader routes
import CreateItem from "./seller/Item/CreateItem";
import Inventory from "./seller/Inventory/Inventory";
import InventoryEdits from "./seller/Inventory/InventoryEdits";
import Promotion from "./seller/Inventory/promotion";
import MyCart from "./customer/my_cart";
//customer routes
import ItemPage from "./customer/item_page";
import PurchaseItem from "./customer/purchaseItem";
import Wishlist from "./customer/wish_list";
import Profile from "./profile";
import ViewCustomers from "./seller/Item/viewCustomers";


function Main() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/items/all" element={<ItemPage />}></Route>
          <Route path="/cart" element={<MyCart />}></Route>
          <Route path="/purchaseItem" element={<PurchaseItem />}></Route>
          <Route path="" element={<Profile />}></Route>
          <Route path="/createItem" element={<CreateItem />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/promotion" element={<Promotion />}></Route>
          <Route path="/Inventory/edit/:id" element={<InventoryEdits />}></Route>
          <Route path="/wish_list" element={<Wishlist />}></Route>
          <Route path="/vieworders" element={<ViewCustomers />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default Main;