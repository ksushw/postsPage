<script setup lang="ts">
import Post from './Post.vue';
import { onMounted } from 'vue';
import UpdatePost from './modals/ModalUpdatePost.vue';
import CreatePost from './modals/ModalCreatePost.vue';
import DeletePost from './modals/ModalDeletePost.vue';
import { usePostsStore } from '../stores/postsStore.ts';

const store = usePostsStore();
onMounted(async () => {
  store.getPosts();
});

const postTemplate = {
  userId: 1,
  title: '',
  body: '',
  id: 1,
};
</script>

<template>
  <v-card class="  h-75 ">
    <div class="d-flex justify-end pa-5">
      <CreatePost :post="postTemplate" />
    </div>
    <v-list lines="one" overflow-auto class='list pt-17 pr-3 pl-3' style="height: calc(100% - 76px)">
      <Post v-for="(post, index) in store.posts" :post="post" :index="index" :key="post.id" class="mb-4">
        <template #controllerButtons>
          <UpdatePost :post="post" />
          <DeletePost :id="post.id" />
        </template>
      </Post>
    </v-list>
  </v-card>
</template>

<style>
.container-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  overflow-y: scroll;
}

.list::-webkit-scrollbar {
  height: 40px;
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
