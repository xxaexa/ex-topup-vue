<template>
  <div class="hero">
    <div
      class="max-w d-flex justify-content-between align-items-center flex-column flex-md-row"
      style="height: 100vh"
    >
      <div class="bg-white rounded p-4" style="width: 50%">
        <FormLogin />
      </div>
      <div style="width: 50%">
        <img src="../../assets/jett.png" alt="jett" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormLogin from "../../components/layout/FormLogin.vue";
</script>
