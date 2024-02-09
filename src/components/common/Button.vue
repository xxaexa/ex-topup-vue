<template>
  <button class="px-4 py-2">{{ props.text }}</button>
</template>

<script setup lang="ts">
import { ButtonProps } from "./../../types/";

const props = defineProps<ButtonProps>();
</script>
