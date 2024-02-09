<template>
  <div class="bg-wite rounded" id="voucher">
    <div class="d-flex flex-row gap-3">
      <InputSearchVue />
      <Button text="Search"></Button>
    </div>

    <div class="my-3">
      <RegularText text="Voucher" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputSearchVue from "../common/InputSearch.vue";
import Button from "../common/Button.vue";
import RegularText from "../common/RegularText.vue";
</script>
