<template>
  <div class="px-3 mt-4">
    <p class="regular-text">{{ props.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { CategoryProps } from "./../../types/";

const props = defineProps<CategoryProps>();
</script>
