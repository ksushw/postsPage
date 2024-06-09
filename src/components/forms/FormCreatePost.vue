<script setup lang="ts">
import { ref } from 'vue';
import { IPost } from '../../types/post';

interface Props {
  post: IPost;
  formName: string;
  buttonText: string;
}
const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'submit', post: IPost): void
}>();

const title = ref(props.post.title);
const text = ref(props.post.body);

</script>

<template>
  <v-card :title="props.formName" class="pa-4 rounded-m">
    <v-sheet class="mx-auto" width="400">
      <v-form fast-fail @submit.prevent class="pa-5">
        <v-text-field v-model="title" label="Добавьте заголовок" />
        <v-textarea v-model="text" label="Добавьте текст поста" maxlength="120" counter single-line></v-textarea>
        <v-btn class="mt-2 bg-cyan-darken-2" type="submit"
          @click="$emit('submit', { ...post, title: title, body: text })" block>
          {{ props.buttonText }}
        </v-btn>
      </v-form>
    </v-sheet>
  </v-card>
</template>
