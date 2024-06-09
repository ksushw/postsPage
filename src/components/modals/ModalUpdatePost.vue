<script setup lang="ts">
import FormCreate from '../forms/FormCreate.vue';
import { IPost } from '../../types/post';
import { usePostsStore } from '../../stores/postsStore';
import { ref } from 'vue';

const store = usePostsStore();

interface Props {
  post: IPost;
}
const modal = ref(false);
const isLoading = ref(false);

const props = defineProps<Props>();
// modal close by v-model
// Заменить везде v-slot на #
const handleSubmitForm = async (post: IPost) => {
  isLoading.value = true;
  store.updatePost(post);
  // isLoading.value = false;
  // modal.value = false;
};
</script>

<template>
  <v-dialog v-model="modal" max-width="500" width="fit-content" max-height="700" overflow-auto>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" density="comfortable" variant="plain" icon="fas fa-pen" size="small"></v-btn>
    </template>
    <template v-slot:default>
      <div class="position-relative">
        <v-btn density="default" icon="fas fa-xmark" class="position-absolute top-0 right-0 ma-2" @click="modal = false"
          style="z-index: 1" />
        <FormCreate formName="Редактировать пост" :post="props.post" buttonText="Изменить" :loading="isLoading"
          @submit="(post) => handleSubmitForm(post)" />
      </div>
    </template>
  </v-dialog>
</template>
