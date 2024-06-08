<script setup lang="ts">
import FormCreatePost from './FormCreatePost.vue';
import { updatePost } from '../api/postApi';
import { IPost } from '../types/post';
import { ref } from 'vue';
import { usePostsStore } from '../stores/PostsStore.ts';

const store = usePostsStore();

interface Props {
  post: IPost;
}
const props = defineProps<Props>();

const postData = ref(props.post);


const handleSubmitForm = async (post: IPost, isActive: any) => {
  const newPostData = await updatePost(post);
  postData.value = newPostData;
  store.patch(newPostData);
  isActive.value = false;
};
</script>

<template>
  <v-dialog max-width="500" width="fit-content" max-height="700" overflow-auto>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" density="comfortable" variant="plain" icon="fas fa-pen" size="small"></v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <div class="position-relative">
        <v-btn density="default" icon="fas fa-xmark" class="position-absolute top-0 right-0 ma-2"
          @click="isActive.value = false" style="z-index: 1" />
        <FormCreatePost formName="Редактировать пост" :post="props.post" buttonText="Изменить"
          @submit="(post) => handleSubmitForm(post, isActive)"></FormCreatePost>
      </div>
    </template>
  </v-dialog>
</template>
