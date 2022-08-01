import Router from "@koa/router";
import {
  createPromotion,
  getPromotion,
  getPromotionAll,
  updatePromotion,
  deletePromotion,
} from "../../../controllers/trader/trader/trader_promotion.js";

const promotion_Router = new Router({
  prefix: "/promotion",
});

promotion_Router.post("/create", (ctx) => {
  const data = ctx.request.body;
  ctx.body = createPromotion(data);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

promotion_Router.get("/getAll", (ctx) => {
  ctx.body = getPromotionAll();
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

promotion_Router.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getPromotion(id);
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

promotion_Router.put("/:id", (ctx) => {
  const id = ctx.params.id;
  const data = ctx.request.body;
  ctx.body = updatePromotion(id, data);
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

promotion_Router.del("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = deletePromotion(id);
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});
export default promotion_Router;