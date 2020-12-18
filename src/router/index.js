import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Orderview from "../views/Orderview.vue";
import Tonysmexrest from "../views/Tonysmexrest.vue";
import Tonystexmex from "../views/Tonystexmex.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/order",
    name: "Orderview",
    component: Orderview
  },
  {
    path: "/tmr",
    name: "Tonysmexrest",
    component: Tonysmexrest
  },
  {
    path: "/ttmx",
    name: "Tonystexmex",
    component: Tonystexmex
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
