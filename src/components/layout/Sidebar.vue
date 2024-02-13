<template>
  <div class="sidebar p-3">
    <LargeText text="EX-TOPUP" />
    <router-link to="/dashboard/order/" class="no-underline">
      <p class="sidebar-text">Dashboard</p>
    </router-link>
    <router-link to="/dashboard/genre/" class="no-underline">
      <p class="sidebar-text">Genre</p>
    </router-link>
    <router-link to="/dashboard/order/" class="no-underline">
      <p class="sidebar-text">Order</p>
    </router-link>
    <router-link to="/dashboard/voucher/" class="no-underline">
      <p class="sidebar-text">Voucher</p>
    </router-link>

    <p class="sidebar-text cursor-pointer" @click="handleLogout">Logout</p>
  </div>
</template>

<script setup lang="ts">
import LargeText from "../common/LargeText.vue";
import { useStore } from "vuex";
import { getModule } from "vuex-module-decorators";
import User from "../../store/module/user";

const store = useStore();
const userModule = getModule(User, store);

const handleLogout = () => {
  userModule.logoutUser();
  alert();
};
</script>
