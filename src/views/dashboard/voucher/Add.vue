<template>
  <div>
    <h3>Add New Post</h3>
    <input v-model="newPost.name" placeholder="Title" />
    <textarea v-model="newPost.description" placeholder="Content"></textarea>
    <button @click="addPost">Add Post</button>
  </div>
</template>
