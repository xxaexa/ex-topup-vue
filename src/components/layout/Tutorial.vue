<template>
  <div
    class="search d-flex align-content-center flex-column p-3 mb-5"
    style="width: 50%"
  >
    <RegularText text="1. Input your id" />
    <RegularText text="2. Select variant" />
    <RegularText
      text="3. Input coupon to get discount (If you have a coupon )"
    />
    <RegularText text="4. Buy" />
  </div>
</template>

<script setup lang="ts">
import RegularText from "../common/RegularText.vue";
</script>
