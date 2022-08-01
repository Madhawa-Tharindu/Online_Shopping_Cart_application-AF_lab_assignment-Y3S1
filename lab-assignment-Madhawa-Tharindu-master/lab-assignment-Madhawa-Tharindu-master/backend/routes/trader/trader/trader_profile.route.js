import Router from "@koa/router";
import {
  create_Profile,
  getTraders,
  getTrader,
} from "../../controllers/trader/trader/trader_profile.js";

const trader_Router = new Router({
  prefix: "/trader",
});

trader_Router.post("/create", (ctx) => {
  const data = ctx.request.body;
  ctx.body = create_Profile(data);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

trader_Router.get("/gettrader", (ctx) => {
  ctx.body = getTraders();
  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

trader_Router.get("/trader/:id", (ctx) => {
  const id = ctx.params.id;

  ctx.body = getTrader(id);

  ctx.set("Content-Type", "application.json");
  ctx.status = 200;
});

export default trader_Router;