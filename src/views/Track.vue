<template>
  <div class="hero">
    <Navbar :isVoucherPage="false" />
    <div class="max-w d-flex flex-column" style="height: 100vh">
      <h2 class="pt-5">TRACK YOUR ORDER</h2>
      <FormTrack />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/layout/Navbar.vue";
import FormTrack from "../components/layout/FormTrack.vue";
</script>
