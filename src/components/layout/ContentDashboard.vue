<template>
  <div class="d-flex flex-column flex-md-row">
    <div v-for="item in props.items" :key="item._id" class="card my-5">
      <h3>{{ item.name }}</h3>
      <p>{{ item.image }}</p>
    </div>
    <h2>{{ props.items }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ContentProps } from "./../../types/";

const props = defineProps<ContentProps>();
console.log(props);
import DashboardBox from "../common/DashboardBox.vue";
</script>
