<template>
  <div class="bg-white rounded" id="voucher">
    <h2>LOGIN</h2>
    <form @submit.prevent="handleSubmit">
      <InputRow v-model="loginForm.email" label="EMAIL" type="email" />
      <InputRow v-model="loginForm.password" label="PASSWORD" type="password" />
      <Button text="LOGIN"></Button>
      <br />
      <br />
      <Button text="LOGIN DEMO"></Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import InputRow from "../common/InputRow.vue";
import Button from "../common/Button.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Swal from "sweetalert2";

import { useStore } from "vuex";
import { getModule } from "vuex-module-decorators";
import User from "../../store/module/user";

const store = useStore();
const userModule = getModule(User, store);
const router = useRouter();

const loginForm = ref({
  email: "",
  password: "",
});

const handleSubmit = async () => {
  try {
    await userModule.loginUser(loginForm.value);
    // Notifikasi login berhasil
    Swal.fire({
      title: "Login Berhasil!",
      text: "Anda akan dialihkan ke Dashboard.",
      icon: "success",
      confirmButtonText: "OK",
    });
    router.push("/dashboard");
  } catch (error) {
    // Notifikasi login gagal
    Swal.fire({
      title: "Login Gagal!",
      text: "Silakan cek kembali username dan password Anda atau coba lagi nanti.",
      icon: "error",
      confirmButtonText: "Coba Lagi",
    });
  }
};
</script>
