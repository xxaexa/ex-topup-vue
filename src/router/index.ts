// router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import LandingVue from "../views/Landing.vue";
import VouchersVue from "../views/Vouchers.vue";
import NotFoundVue from "../views/NotFound.vue";
import AboutVue from "../views/About.vue";
import TrackVue from "../views/Track.vue";
import VoucherVue from "../views/Voucher.vue";
import LoginVue from "../views/Login.vue";
import DashboardVue from "../views/Dashboard.vue";
import OrderVue from "../views/Order.vue";

const routes = [
  {
    path: "/",
    name: "landingPage",
    component: LandingVue,
  },

  {
    path: "/about",
    name: "about",
    component: AboutVue,
  },

  {
    path: "/vouchers",
    name: "vouchers",
    component: VouchersVue,
  },

  {
    path: "/vouchers/:name",
    name: "voucher",
    component: VoucherVue,
  },

  {
    path: "/track",
    name: "track",
    component: TrackVue,
  },
  {
    path: "/login",
    name: "login",
    component: LoginVue,
  },

  {
    path: "/dashboard",
    component: DashboardVue,
    beforeEnter: (to, from, next) => {
      const userInfo = localStorage.getItem("userInfo");

      if (!userInfo) {
        next({ name: "login" });
      } else {
        next();
      }
    },
    children: [
      {
        path: "order",
        name: "order",
        component: OrderVue,
        // Anda bisa menambahkan pengecekan serupa di sini jika perlu
      },
    ],
  },

  {
    path: "/:catchAll(.*)",
    component: NotFoundVue,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
