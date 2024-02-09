<template>
  <div class="hero">
    <div
      class="max-w d-flex justify-content-between align-items-center flex-column flex-md-row"
      style="height: 100vh"
    >
      <div class="px-3" style="width: 50%">
        <h1>TOPUP NOW</h1>
        <h1>AND</h1>
        <h1>GET DISCOUNT</h1>

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
      <div style="width: 50%; margin-bottom: 0pxw">
        <img src="./../../assets/jett.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RegularText from "../common/RegularText.vue";
import Button from "../common/Button.vue";
</script>
