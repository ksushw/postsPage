<script setup lang="ts">
import { ref } from 'vue';
import FormDeletePost from '../forms/FormDeletePost.vue';
import { usePostsStore } from '../../stores/postsStore';

const store = usePostsStore();

interface Props {
  id: number;
}
const props = defineProps<Props>();
const isLoading = ref(false);

const handleSubmitForm = async (id: number, isActive: any) => {
  isLoading.value = true;
  store.deletePost(id);
  isLoading.value = false;
  isActive.value = false;
};

const cancelForm = (isActive: any) => {
  isActive.value = false;
};
</script>

<template>
  <v-dialog max-width="500" width="fit-content" max-height="700" overflow-auto>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" density="comfortable" variant="plain" icon="fas fa-trash" size="small"></v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <div class="position-relative">
        <v-btn density="default" icon="fas fa-xmark" class="position-absolute top-0 right-0 ma-2"
          @click="isActive.value = false" style="z-index: 1" />
        <FormDeletePost :id="props.id" @submit="(id) => handleSubmitForm(id, isActive)"
          @cancel="(i) => cancelForm(isActive)" :loading="isLoading" />
      </div>
    </template>
  </v-dialog>
</template>
