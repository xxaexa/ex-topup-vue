<template>
  <div
    class="max-w d-flex justify-content-between flex-column flex-md-row"
    id="voucher"
    style="height: 100vh; padding-top: 100px; padding-bottom: 100px"
  >
    <!-- <div v-if="isLoading" class="loading-indicator">Loading...</div>
  </div>-->
    <div class="voucher-left">
      <InputSearch />
      <!-- <Category v-for="genre in genres" :key="genre._id" :name="genre.name" /> -->
      <!-- <div class="voucher-right">
      <div class="d-flex flex-column gap-4">
        <Card
          v-for="voucher in vouchers"
          :key="voucher._id"
          :to="`vouchers/${voucher.name}`"
          :name="voucher.name"
          :image="voucher.name"
        />
      </div>
    </div> -->
    </div>
  </div>
</template>

<script lang="ts"></script>
