//import modules
import Koa from "koa";
import bodyparser from "koa-bodyparser";
import customer_Router from "./routes/customer/customer/cus_profile.route.js";
import trader_Router from "./routes/trader/trader/trader_profile.route.js";
import item_Router from "./routes/trader/trader/trader_item.route.js";
import promotion_Router from "./routes/trader/trader/trader_promotion.route.js";
import wishlist_Router from "./routes/customer/customer/cus_wishlist.route.js";
import cart_Router from "./routes/customer/customer/cus_cart.route.js";
import purchase_Router from "./routes/customer/customer/cus_purchase.route.js";

//middlwares
import cors from "@koa/cors";
const app = new Koa();
app.use(bodyparser());
app.use(cors());

//routes
app.use(customer_Router.routes()).use(customer_Router.allowedMethods());
app.use(trader_Router.routes()).use(trader_Router.allowedMethods());
app.use(item_Router.routes()).use(item_Router.allowedMethods());
app.use(promotion_Router.routes()).use(promotion_Router.allowedMethods());
app.use(wishlist_Router.routes()).use(wishlist_Router.allowedMethods());
app.use(cart_Router.routes()).use(cart_Router.allowedMethods());
app.use(purchase_Router.routes()).use(purchase_Router.allowedMethods());


app.use((ctx) => {
  ctx.set("Content-Type", "text/html");
  ctx.body = "<h2>not found</h2>";
  ctx.status = 404;
});

//establish server
app.listen(9000, () => {
  console.log("app listening on port 9000");
});