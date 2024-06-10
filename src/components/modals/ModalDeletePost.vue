<script setup lang="ts">
  import { ref } from 'vue';
  import FormDelete from '../forms/FormDelete.vue';
  import { usePostsStore } from '../../stores/postsStore';

  interface Props {
    id: number;
  }

  const store = usePostsStore();
  const props = defineProps<Props>();
  const modal = ref(false);
  const isLoading = ref(false);

  const handleSubmitForm = async (id: number) => {
    isLoading.value = true;
    store.deletePost(id);
    isLoading.value = false;
    close();
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
        density="comfortable"
        variant="plain"
        icon="fas fa-trash"
        size="small" />
    </template>
    <template #default>
      <div class="position-relative">
        <v-btn
          density="default"
          icon="fas fa-xmark"
          class="position-absolute top-0 right-0 mr-6 mt-3"
          @click="close"
          style="z-index: 1" />
        <FormDelete
          :id="props.id"
          @submit="(id) => handleSubmitForm(id)"
          @cancel="close"
          :loading="isLoading" />
      </div>
    </template>
  </v-dialog>
</template>
