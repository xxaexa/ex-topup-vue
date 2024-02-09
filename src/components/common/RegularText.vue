<template>
  <p class="regular-text">
    {{ props.text }}
  </p>
</template>

<script setup lang="ts">
import { TextProps } from "./../../types/";

const props = defineProps<TextProps>();
</script>
