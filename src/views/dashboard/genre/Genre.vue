<template>
  <div class="dashboard">
    <div class="d-flex justify-content-between">
      <h2>Genre</h2>
      <router-link to="voucher/add" class="no-underline">
        <p>Add Genre</p>
      </router-link>
    </div>
    <!-- <div class="table-genre">
      <table class="">
        <thead class="px-5 border-2 border-bottom pb-2">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="genre in genres" :key="genre._id" class="">
            <td>{{ genre.name }}</td>
            <td class="d-flex gap-3">
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>

<script setup lang="ts">
// import { onMounted, ref, Ref } from "vue";

// import { Genre } from "../../../types/";

// import { useGenresStore } from "../../../store/genre";

// const genreStore = useGenresStore();
// const genres: Ref<Genre[]> = ref([]);

// onMounted(async () => {
//   await genreStore.fetchGenres();
//   genres.value = genreStore.genres;
// });
</script>
