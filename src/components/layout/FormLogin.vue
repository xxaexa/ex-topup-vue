<template>
  <div class="bg-wite rounded" id="voucher">
    <h2>LOGIN</h2>
    <InputRow label="EMAIL" />
    <InputRow label="PASSWORD" />
    <Button text="LOGIN" />
    <br />
    <br />
    <Button text="LOGIN DEMO" />
  </div>
</template>

<script setup lang="ts">
import InputRow from "../common/InputRow.vue";
import Button from "../common/Button.vue";
</script>
