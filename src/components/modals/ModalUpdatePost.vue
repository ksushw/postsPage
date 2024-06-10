<script setup lang="ts">
  import FormCreate from '../forms/FormCreate.vue';
  import { IPost } from '../../types/post';
  import { usePostsStore } from '../../stores/postsStore';
  import { ref } from 'vue';

  interface Props {
    post: IPost;
  }

  const props = defineProps<Props>();

  const store = usePostsStore();

  const modal = ref(false);
  const isLoading = ref(false);


  const handleSubmitForm = async (post: IPost) => {
    isLoading.value = true;
    store.updatePost(post);
    isLoading.value = false;
    modal.value = false;
  };
</script>

<template>
  <v-dialog
    v-model="modal"
    max-width="500"
    width="fit-content"
    max-height="700"
    overflow-auto>
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        density="comfortable"
        variant="plain"
        icon="fas fa-pen"
        size="small" />
    </template>
    <template #default>
      <div class="position-relative">
        <v-btn
          density="default"
          icon="fas fa-xmark"
          class="position-absolute top-0 right-0 mr-6 mt-3"
          @click="modal = false"
          style="z-index: 1" />
        <FormCreate
          formName="Редактировать пост"
          :post="props.post"
          buttonText="Изменить"
          :loading="isLoading"
          @submit="(post) => handleSubmitForm(post)" />
      </div>
    </template>
  </v-dialog>
</template>
