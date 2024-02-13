<template>
  <div
    class="d-flex justify-content-center align-items-center gap-5"
    style="height: 100vh"
  >
    <router-link to="/vouchers">
      <Button text="Vouchers"> </Button>
    </router-link>
    <router-link to="/dashboard">
      <Button text="Dashboard"> </Button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import Button from "./../../components/common/Button.vue";
</script>
