<script setup lang="ts">
import { ref } from 'vue';
import { IPost } from '../../types/post';
import FormCreate from '../forms/FormCreate.vue';
import { usePostsStore } from '../../stores/postStore';

interface Props {
  post: IPost;
  buttonDisable: boolean;
}

const store = usePostsStore();
const props = defineProps<Props>();
const postData = ref(props.post);
const isModalOpen = ref(false);
const isLoading = ref(false);

const handleSubmitForm = async (post: IPost) => {
  isLoading.value = true;
  await store.createPost(post);
  isLoading.value = false;
  isModalOpen.value = false;
};

const close = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <v-dialog
    v-model="isModalOpen"
    max-width="500"
    width="fit-content"
    max-height="700"
    overflow-auto
  >
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        variant="tonal"
        text="Создать пост"
        class="bg-cyan-darken-1"
        :disabled="buttonDisable"
      />
    </template>
    <template #default>
      <div class="position-relative">
        <v-btn
          density="default"
          icon="fas fa-xmark"
          class="position-absolute top-0 right-0 mr-6 mt-3"
          style="z-index: 1"
          @click="close"
        />
        <FormCreate
          formName="Создать пост"
          :post="postData"
          buttonText="Создать"
          :loading="isLoading"
          @submit="handleSubmitForm"
        />
      </div>
    </template>
  </v-dialog>
</template>
