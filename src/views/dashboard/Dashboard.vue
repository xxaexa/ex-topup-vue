<template>
  <div class="vh-100 hero">
    <div class="">
      <Sidebar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "../../components/layout/Sidebar.vue";
</script>
