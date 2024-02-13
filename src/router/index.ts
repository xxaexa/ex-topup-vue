// router/index.ts
import { createRouter, createWebHistory } from "vue-router";

import NotFoundVue from "../views/NotFound.vue";
// home
import LandingVue from "../views/home/Landing.vue";
import VoucherVue from "../views/home/Voucher.vue";
import VouchersVue from "../views/home/Vouchers.vue";
import TrackVue from "../views/home/Track.vue";
import AboutVue from "../views/home/About.vue";

// dashboard
import DashboardVue from "../views/dashboard/Dashboard.vue";
import DashboardVoucherVue from "./../views/dashboard/voucher/Voucher.vue";
import DashboardOrderVue from "../views/dashboard/order/Order.vue";
import DashboardGenreVue from "../views/dashboard/genre/Genre.vue";
import LoginVue from "../views/dashboard/Login.vue";

const routes = [
  {
    path: "/",
    name: "landingPage",
    component: LandingVue,
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
    path: "/about",
    name: "about",
    component: AboutVue,
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
      const userInfo = localStorage.getItem("user");

      if (!userInfo) {
        next({ name: "login" });
      } else {
        next();
      }
    },
    children: [
      {
        path: "voucher",
        name: "dashboardVoucher",
        component: DashboardVoucherVue,
      },
      {
        path: "order",
        name: "dashboardOrder",
        component: DashboardOrderVue,
      },
      {
        path: "genre",
        name: "DashboardGenre",
        component: DashboardGenreVue,
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
