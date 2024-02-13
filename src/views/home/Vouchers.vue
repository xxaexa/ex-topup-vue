<template>
  <div>
    <Navbar :isVoucherPage="true" />
    <Hero />
    <Content />
  </div>
</template>

<script setup lang="ts">
import Hero from "./../../components/layout/Hero.vue";
import Content from "./../../components/layout/Content.vue";
import Navbar from "./../../components/layout/Navbar.vue";
</script>
