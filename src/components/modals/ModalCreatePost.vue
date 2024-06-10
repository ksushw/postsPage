<script setup lang="ts">
  import { ref } from 'vue';
  import { IPost } from '../../types/post';
  import FormCreate from '../forms/FormCreate.vue';
  import { usePostsStore } from '../../stores/postsStore';

  interface Props {
    post: IPost;
    buttonDisable: string;
  }

  const store = usePostsStore();
  const props = defineProps<Props>();
  const postData = ref(props.post);
  const modal = ref(false);
  const isLoading = ref(false);

  const handleSubmitForm = async (post: IPost) => {
    isLoading.value = true;
    await store.createPost(post);
    isLoading.value = false;
    modal.value = false;
  };

  const close = () => {
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
        variant="tonal"
        text="Создать пост"
        class="bg-cyan-darken-1"
        buttonDisable />
    </template>
    <template #default>
      <div class="position-relative">
        <v-btn
          density="default"
          icon="fas fa-xmark"
          class="position-absolute top-0 right-0 mr-6 mt-3"
          @click="close"
          style="z-index: 1" />
        <FormCreate
          formName="Создать пост"
          :post="postData"
          buttonText="Создать"
          :loading="isLoading"
          @submit="(post) => handleSubmitForm(post)" />
      </div>
    </template>
  </v-dialog>
</template>
