<template>
  <div
    class="max-w d-flex justify-content-between flex-column flex-md-row"
    id="voucher"
    style="height: 100vh; padding-top: 100px; padding-bottom: 100px"
  >
    <div v-if="isLoading" class="loading-indicator">Loading...</div>
    <div class="voucher-left">
      <InputSearch />
      <Category name="FPS" />
    </div>
    <div class="voucher-right">
      <div class="d-flex flex-column gap-4">
        <Card
          v-for="voucher in vouchers"
          :key="voucher.name"
          :to="`vouchers/${voucher.name}`"
          :name="voucher.name"
          :image="voucher.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import Card from "../common/Card.vue";
import Category from "../common/Category.vue";
import InputSearch from "../common/InputSearch.vue";
import { VoucherModule } from "./../../store/modules/vouchers";
import type { voucher } from "../../types";

const vouchers = ref<voucher[]>([]);
const isLoading = computed(() => VoucherModule.isLoading);

onMounted(async () => {
  await VoucherModule.getVouchers();

  vouchers.value = VoucherModule.vouchers;
});
</script>
