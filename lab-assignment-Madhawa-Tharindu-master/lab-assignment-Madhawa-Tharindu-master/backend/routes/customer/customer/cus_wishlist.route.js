import Router from "@koa/router";
import {
  add_To_Wishlist,
  delete_From_Wishlist,
  get_Items,
} from "../../../controllers/customer/customer/cus_wishlist.js";

const wishlist_Router = new Router({
  prefix: "/wishlist",
});

wishlist_Router.post("/create", (ctx) => {
  const data = ctx.request.body;

  ctx.body = add_To_Wishlist(data);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

wishlist_Router.del("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = delete_From_Wishlist(id);
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});
wishlist_Router.get("/getitems", (ctx) => {
  ctx.body = get_Items();
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

export default wishlist_Router;