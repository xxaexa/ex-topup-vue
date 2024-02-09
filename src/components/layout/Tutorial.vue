<template>
  <div
    class="search d-flex align-content-center flex-column p-3 mb-5"
    style="width: 50%"
  >
    <RegularText Text="1. Input your id"></RegularText>
    <RegularText Text="2. Select variant"></RegularText>
    <RegularText
      Text="3. Input coupon to get discount (If you have a coupon )"
    ></RegularText>
    <RegularText Text="4.  Buy"></RegularText>
  </div>
</template>

<script setup lang="ts">
import RegularText from "../common/RegularText.vue";
</script>
