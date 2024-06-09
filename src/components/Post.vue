<script setup lang="ts">
interface Props {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  index: number
}

const props = defineProps<Props>();
</script>

<template>
  <v-card :title="props.index + 1 + '. ' + props.post.title" min-height="100" variant="outlined">
    <template #text>
      <div class="mt-2">
        {{ props.post.body }}
      </div>
    </template>
    <template #append>
      <div class="d-flex ga-3">
        <slot name="controllerButtons"> </slot>
      </div>
    </template>
  </v-card>
</template>
