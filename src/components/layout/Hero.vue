<template>
  <div class="hero">
    <div
      class="max-w d-flex justify-content-between align-items-center flex-row"
      style="height: 100vh"
    >
      <div class="w-100 w-md-50 pt-5 pt-md-0 px-3">
        <LargeText text="TOPUP NOW" />
        <LargeText text="AND" />
        <LargeText text="GET DISCOUNT" />

        <div class="my-4">
          <RegularText
            text="The most trusted and lucky top up site in terms of gacha"
          />
        </div>
        <div class="my-4">
          <a href="#voucher">
            <Button text="SHOP NOW"></Button>
          </a>
        </div>
      </div>
      <div class="w-50 d-none d-md-block">
        <img src="./../../assets/jett.png" alt="" class="h-fit" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RegularText from "../common/RegularText.vue";
import LargeText from "../common/LargeText.vue";
import Button from "../common/Button.vue";
</script>
