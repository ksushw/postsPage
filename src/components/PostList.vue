<script setup lang="ts">
import Post from './Post.vue';
import { onMounted, ref } from 'vue';
import UpdatePost from './modals/ModalUpdatePost.vue';
import CreatePost from './modals/ModalCreatePost.vue';
import DeletePost from './modals/ModalDeletePost.vue';
import { usePostsStore } from '../stores/postStore.ts';

const postTemplate = {
  userId: 1,
  title: '',
  body: '',
  id: 101,
};

const isLoading = ref(true);
const store = usePostsStore();

onMounted(async () => {
  await store.getPosts();
  isLoading.value = false;
});
</script>

<template>
  <v-card class="h-75">
    <div class="d-flex justify-end pa-5">
      <CreatePost :post="postTemplate" :buttonDisable="isLoading" />
    </div>
    <v-list
      lines="one"
      overflow-auto
      class="list pt-17 pr-3 pl-3"
      width="988"
      style="height: calc(100% - 76px)"
    >
      <div v-if="isLoading">
        <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          type="subtitle, paragraph"
          class="mb-4 w-100"
          :loading="isLoading" 
        />
      </div>
      <Post v-for="post in store.posts" :post="post" :key="post.id" class="mb-4">
        <template #controllerButtons>
          <UpdatePost :post="post" />
          <DeletePost :id="post.id" />
        </template>
      </Post>
    </v-list>
  </v-card>
</template>

<style>
.list {
  overflow-y: scroll;
}

.list::-webkit-scrollbar {
  height: 10px;
  width: 10px;
  background: rgb(255, 255, 255);
}

.list::-webkit-scrollbar-thumb {
  background: gray;
  -webkit-border-radius: 1ex;
  -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
}

.list::-webkit-scrollbar-corner {
  background: lightgray;
}
</style>
