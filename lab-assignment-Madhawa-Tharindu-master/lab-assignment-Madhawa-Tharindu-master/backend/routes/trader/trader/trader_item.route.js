import Router from "@koa/router";
import {
  createItem,
  getItem,
  updateItem,
  getItems,
  deleteItem,
} from "../../controllers/trader/trader/trader_item.js";

const item_Router = new Router({
  prefix: "/item",
});

item_Router.get("/getitems", (ctx) => {
  ctx.body = getItems();
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

item_Router.post("/create", (ctx) => {
  const data = ctx.request.body;

  ctx.body = createItem(data);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

item_Router.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getItem(id);
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

item_Router.put("/update/:id", (ctx) => {
  const id = ctx.params.id;
  const data = ctx.request.body;
  ctx.body = updateItem(id, data);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

item_Router.delete("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = deleteItem(id);
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

export default item_Router;