<script setup lang="ts">
  import FormCreatePost from './FormCreatePost.vue';

  interface Props {
    post: {
      userId: number;
      id: number;
      title: string;
      body: string;
    };
  }
  const props = defineProps<Props>();

  const handleSubmitForm = (title: string, text: string) => {
    console.log(title, text);
  };
</script>

<template>
  <v-dialog max-width="500" width="fit-content" max-height="700" overflow-auto>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        density="comfortable"
        variant="plain"
        icon="fas fa-pen"
        size="small"></v-btn>
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
          formName="Редактировать пост"
          :title="props.post.title"
          :text="props.post.body"
          buttonText="Изменить"
          @submitFormChange="handleSubmitForm"></FormCreatePost>
      </div>
    </template>
  </v-dialog>
</template>
