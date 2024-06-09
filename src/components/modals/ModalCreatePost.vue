<script setup lang="ts">
import { ref } from 'vue';
import { IPost } from '../../types/post';
import FormCreate from '../forms/FormCreate.vue';
import { usePostsStore } from '../../stores/postsStore';

interface Props {
  post: IPost;
}
const store = usePostsStore();
const props = defineProps<Props>();
const postData = ref(props.post);
const isLoading = ref(false);

const handleSubmitForm = async (post: IPost, isActive: any) => {
  isLoading.value = true;
  await store.createPost(post);
  isLoading.value = false;
  isActive.value = false;
};
</script>

<template>
  <v-dialog max-width="500" width="fit-content" max-height="700" overflow-auto>
    <template #activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" variant="tonal" text="Создать пост" class="bg-cyan-darken-1"></v-btn>
    </template>
    <template #default="{ isActive }">
      <div class="position-relative">
        <v-btn density="default" icon="fas fa-xmark" class="position-absolute top-0 right-0 ma-2"
          @click="isActive.value = false" style="z-index: 1" />
        <FormCreate formName="Создать пост" :post="postData" buttonText="Создать" :loading="isLoading"
          @submit="(post) => handleSubmitForm(post, isActive)" />
      </div>
    </template>
  </v-dialog>
</template>
