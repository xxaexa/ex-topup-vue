<template>
  <div>
    <h2>Manage Posts</h2>
    <div v-if="editPostId">
      <h3>Edit Post</h3>
      <input v-model="editedPost.name" placeholder="Title" />
      <textarea
        v-model="editedPost.description"
        placeholder="Content"
      ></textarea>
      <button @click="updatePost">Save</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from "vue";
import { usePostsStore } from "../store/post/index"; // Update this path according to your project structure

export default defineComponent({
  setup() {
    const postsStore = usePostsStore();
    const editedPost = reactive({ id: null, name: "", description: "" });
    const editPostId = ref(null);

    onMounted(async () => {
      await postsStore.fetchPosts();
    });

    const editPost = (post) => {
      editPostId.value = post.id;
      editedPost.id = post.id;
      editedPost.name = post.name;
      editedPost.description = post.description;
    };

    const updatePost = async () => {
      await postsStore.updatePost({ ...editedPost });
      editPostId.value = null;
    };

    return {
      posts: postsStore.posts,

      addPost,
      editPost,
      updatePost,

      editPostId,
      editedPost,
    };
  },
});
</script>

<style>
.post {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
