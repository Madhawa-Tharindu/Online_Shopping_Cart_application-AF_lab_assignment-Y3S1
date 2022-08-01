import Router from "@koa/router";
import {
  createCusProfile,
  getCustomer,
  getCustomers,
} from "../../controllers/customer/customer/cus_profile.api.js";

const customer_Router = new Router({
  prefix: "/customer",
});

customer_Router.post("/create", (ctx) => {
  const data = ctx.request.body;
  ctx.body = createCusProfile(data);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

customer_Router.get("/getcustomers", (ctx) => {
    ctx.body = getCustomers();
    ctx.set("Content-Type", "application.json");
    ctx.status = 200;
  });
  
  customer_Router.get("/customer/:id", (ctx) => {
    const id = ctx.params.id;
  
    ctx.body = getCustomer(id);
  
    ctx.set("Content-Type", "application.json");
    ctx.status = 200;
  });


export default customer_Router;