import Router from "@koa/router";
import {
  add_To_Cart,
  delete_From_Cart,
  purchase,
  get_Items,
  get_Item,
} from "../../controllers/customer/cus_cart.js";

const cart_Router = new Router({
  prefix: "/cart",
});

cart_Router.post("/create", (ctx) => {
  const data = ctx.request.body;

  ctx.body = add_To_Cart(data);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

cart_Router.del("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = delete_From_Cart(id);
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

cart_Router.get("/purchase", (ctx) => {
  ctx.body = purchase();
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});
cart_Router.get("/getitems", (ctx) => {
  ctx.body = get_Items();
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

cart_Router.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = get_Item(id);
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

export default cart_Router;