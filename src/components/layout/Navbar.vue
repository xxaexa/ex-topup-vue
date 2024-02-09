<template>
  <nav
    class="navbar fixed-top"
    :class="{
      'scroll-background': hasScrolled && props.isVoucherPage,
      'bg-white': !props.isVoucherPage,
    }"
  >
    <div
      class="container-fluid justify-content-between max-w align-content-center"
    >
      <div>
        <RegularText text="EX-TOPUP" />
      </div>
      <div class="d-flex align-items-center gap-4">
        <router-link
          :to="props.isVoucherPage ? '#voucher' : '/vouchers'"
          class="no-underline"
        >
          <RegularText text="Voucher" />
        </router-link>

        <router-link to="/track" class="no-underline">
          <RegularText text="Track" />
        </router-link>
        <router-link to="/about" class="no-underline">
          <RegularText text="About" />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import RegularText from "./../common/RegularText.vue";
import { NavbarProps } from "./../../types/";
const props = defineProps<NavbarProps>();

const hasScrolled = ref(false);

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.navbar.scroll-background {
  background-color: white;
  transition: background-color 0.3s;
}

.navbar {
  background-color: transparent;
  transition: background-color 0.3s;
}

.no-underline {
  text-decoration: none;
}
</style>
