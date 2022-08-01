import Router from "@koa/router";

import {
  add_To_Purchase,
  get_Purchase_Items,
} from "../../controllers/customer/customer/cus_purchase.js";

const purchase_Router = new Router({
  prefix: "/purchase",
});

purchase_Router.post("/create", (ctx) => {
  const data = ctx.request.body;

  ctx.body = add_To_Purchase(data);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

purchaseRouter.get("/items", (ctx) => {
  ctx.body = get_Purchase_Items();
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

export default purchase_Router;