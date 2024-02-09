<template>
  <div class="hero">
    <Navbar :isVoucherPage="true" />
    <div
      class="max-w d-flex flex-row justify-center align-items-center gap-5"
      style="height: 100vh"
    >
      <Tutorial />
      <FormBuy />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/layout/Navbar.vue";
import Tutorial from "../components/layout/Tutorial.vue";
import FormBuy from "../components/layout/FormBuy.vue";
</script>
