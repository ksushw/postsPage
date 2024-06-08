<script setup lang="ts">
import Post from './Post.vue';
import { onMounted, ref } from 'vue';
import UpdatePost from './ModalUpdatePost.vue';
import CreatePost from './ModalCreatePost.vue';
import DeletePost from './ModalDeletePost.vue';
import { getPosts } from '../api/postApi';
import { usePostsStore } from '../stores/PostsStore.ts';

const store = usePostsStore();

onMounted(async () => {
  const postsData = await getPosts();
  store.addPosts(postsData);
});

const postTemplate = {
  userId: 1,
  title: '',
  body: '',
  id: 1,
};
</script>

<template>
  <div class="bg-cyan-lighten-5 rounded-lg elevation-5 mt-5 mb-5 h-100 overflow-auto">
    <div class="d-flex justify-end pa-5">
      <CreatePost :post="postTemplate" />
    </div>
    <div no-gutters class="pa-6 ga-4 container-grid ">
      <Post v-for="post in store.posts" :post="post" :elevation="6" :key="post.id">
        <template #controllerButtons>
          <UpdatePost :post="post" />
          <DeletePost :id="post.id" />
        </template>
      </Post>
    </div>
  </div>
</template>

<style>
.container-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
