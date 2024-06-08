<script setup lang="ts">
import Post from './Post.vue';
import { IPost } from '../types/post';
import { ref, reactive, onMounted } from 'vue';
import UpdatePost from './ModalUpdatePost.vue';
import CreatePost from './ModalCreatePost.vue';
import DeletePost from './ModalDeletePost.vue';
import { getPosts, createPost, deletePost, updatePost } from '../api/postApi'

const posts = ref<IPost[]>([])
const testData = ref<any>()

onMounted(async () => {
  posts.value = await getPosts();
  testData.value = await updatePost(posts.value[1])
  console.log(testData.value)
})

const handleUpdatePost = (id: number) => {
  console.log(`update ${id} post`);
};

const handleDeletePost = (id: number) => {
  console.log(`delete ${id} post`);
};
const isOpen = ref(false);

const closeModal = (): void => {
  isOpen.value = !isOpen.value;
};



</script>

<template>
  <div class="bg-cyan-lighten-5 rounded-lg elevation-5 mt-5 mb-5 h-100 overflow-hidden">
    <div class="d-flex justify-end pa-5">
      <CreatePost />
    </div>
    <div no-gutters class="pa-6 ga-4 container-grid overflow-auto ">
      <Post v-for="post in posts" :post="post" :elevation="6" :key="post.id" @closeModal="handleUpdatePost"
        @delete="handleDeletePost">
        <template #controllerButtons>
          <UpdatePost :post="post" />
          <DeletePost :id="1" />
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
