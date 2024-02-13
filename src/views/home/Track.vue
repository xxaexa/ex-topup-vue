<template>
  <div class="hero">
    <Navbar :isVoucherPage="false" />
    <div class="max-w d-flex flex-column pt-5 vh-100 px-3">
      <LargeText text="TRACK YOUR ORDER" />
      <FormTrack />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./../../components/layout/Navbar.vue";
import FormTrack from "./../../components/layout/FormTrack.vue";
import LargeText from "../../components/common/LargeText.vue";
</script>
