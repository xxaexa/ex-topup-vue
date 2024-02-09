<template>
  <div class="d-flex flex-column my-4">
    <label class="mb-2">{{ props.label }}</label>
    <input type="text" class="input-row rounded px-2 py-1" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { InputRowProps } from "./../../types/";

const props = defineProps<InputRowProps>();
</script>
