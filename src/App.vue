<script setup lang="ts">
import PostList from './components/PostList.vue'
import CreatingForm from './components/FormCreatePost.vue'
</script>

<template>
  <v-app>
    <v-container>
      <PostList />
      <CreatingForm>
      </CreatingForm>
    </v-container>
  </v-app>
</template>
