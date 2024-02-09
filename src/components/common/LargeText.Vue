<!-- Button.vue -->
<template>
  <p class="large-text">
    {{ props.text }}
  </p>
</template>

<script>
import { TextProps } from "./../../types/";


const props = defineProps<TextProps>();
</script>
