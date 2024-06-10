<script setup lang="ts">
  import { ref } from 'vue';
  import { IPost } from '../../types/post';

  interface Props {
    post: IPost;
    formName: string;
    buttonText: string;
    loading: boolean;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'submit', post: IPost): void;
  }>();

  const form = ref();
  const title = ref(props.post.title);
  const text = ref(props.post.body);

  const rules = ref([(v: string) => !!v || 'Обязательное поле']);

  const handleFormSubmit = async () => {
    const { valid } = await form.value.validate();
    if (valid) {
      emit('submit', { ...props.post, title: title.value, body: text.value });
    }
  };
</script>

<template>
  <v-card :title="props.formName" class="pa-4 rounded-m">
    <v-sheet class="mx-auto" width="400">
      <v-form
        ref="form"
        fast-fail
        @submit.prevent="handleFormSubmit"
        class="pa-5">
        <v-text-field
          v-model="title"
          label="Добавьте заголовок"
          variant="outlined"
          :rules="rules" />
        <v-textarea
          v-model="text"
          label="Добавьте текст поста"
          maxlength="200"
          variant="outlined"
          counter
          :rules="rules"
          single-line />
        <v-btn
          class="mt-2 bg-cyan-darken-2"
          type="submit"
          :loading="loading"
          :disabled="props.loading"
          block>
          {{ props.buttonText }}
        </v-btn>
      </v-form>
    </v-sheet>
  </v-card>
</template>
