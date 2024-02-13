<template>
  <div class="dashboard">
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    ></div>
    <div class="d-flex justify-content-between">
      <h2>Voucher</h2>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Voucher
      </button>
    </div>

    <!-- <div class="row">
      <div class="col-md-4" v-for="voucher in vouchers" :key="voucher._id">
        <div class="card">
          <div class="card-body">
            {{ voucher.name }}
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts"></script>
