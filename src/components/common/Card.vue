<template>
  <router-link :to="$props.to" class="no-underline">
    <div class="card">
      <img src="./../../assets/vue.svg" alt="Gambar Voucher" />
      <div class="card-body">
        <h5 class="card-title">{{ props.name }}</h5>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import { CardProps } from "./../../types/";

const props = defineProps<CardProps>();
</script>
