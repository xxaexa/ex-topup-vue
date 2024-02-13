<template>
  <div class="d-flex flex-column my-4">
    <label class="mb-2">{{ props.label }}</label>
    <input
      class="input-row rounded px-2 py-1"
      :type="props.type"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script setup lang="ts">
import { InputRowProps } from "./../../types/";
const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};

const props = defineProps<InputRowProps>();
</script>
