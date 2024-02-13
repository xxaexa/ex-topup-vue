<template>
  <div class="d-flex justify-content-center align-items-center h-screen">
    <div>
      <h1>404 Not Found</h1>
      <RegularText text="The page you are looking for was not found." />

      <router-link to="/">Go to Home</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import RegularText from "../components/common/RegularText.vue";
</script>
