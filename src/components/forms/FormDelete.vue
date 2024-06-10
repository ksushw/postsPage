<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    id: number;
    loading: boolean;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (e: 'submit', id: number): void;
    (e: 'cancel'): void;
  }>();

  const isDisabled = computed(() => {
    return props.loading ? 'disabled' : '';
  });
</script>

<template>
  <v-card title="Удаление поста" class="pa-4 rounded-m">
    <v-sheet class="mx-auto" width="400">
      <v-form fast-fail @submit.prevent class="pa-5">
        <div class="text-subtitle-1">Вы действительно хотите удалить пост?</div>
        <div class="d-flex justify-space-around ga-3 mt-3">
          <v-btn
            class="mt-2 flex-1-1-100"
            type="submit"
            @click="$emit('cancel')"
            isDisabled>
            Отмена
          </v-btn>
          <v-btn
            class="mt-2 flex-1-1-100 bg-red-darken-2"
            type="submit"
            :loading="loading"
            isDisabled
            @click="$emit('submit', props.id)">
            Удалить
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </v-card>
</template>
