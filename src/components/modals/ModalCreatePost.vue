<script setup lang="ts">
  import { ref } from 'vue';
  import { IPost } from '../../types/post';
  import FormCreatePost from '../forms/FormCreatePost.vue';
  import { usePostsStore } from '../../stores/postsStore';

  const store = usePostsStore();

  interface Props {
    post: IPost;
  }
  const props = defineProps<Props>();

  const postData = ref(props.post);

  const handleSubmitForm = async (post: IPost, isActive: any) => {
    store.createPost(post);
    isActive.value = false;
  };
</script>

<template>
  <v-dialog max-width="500" width="fit-content" max-height="700" overflow-auto>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        variant="tonal"
        text="Создать пост"
        class="bg-cyan-darken-1"></v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <div class="position-relative">
        <v-btn
          density="default"
          icon="fas fa-xmark"
          class="position-absolute top-0 right-0 ma-2"
          @click="isActive.value = false"
          style="z-index: 1" />
        <FormCreatePost
          formName="Создать пост"
          :post="postData"
          buttonText="Создать"
          @submit="(post) => handleSubmitForm(post, isActive)"></FormCreatePost>
      </div>
    </template>
  </v-dialog>
</template>
