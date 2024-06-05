<script setup lang="ts">
import { ref } from 'vue'

interface Props {
    formName: string;
    title: string;
    text: string;
    button: string;
}
const props = defineProps<Props>();

const emit = defineEmits<{
    submitFormChange: [title: string, text: string];
}>();
const title = ref(props.title);
const text = ref(props.text);
</script>

<template>
    <v-card :title="props.formName" class="pa-4 rounded-m">
        <v-sheet class="mx-auto" width="400">
            <v-form fast-fail @submit.prevent class="pa-5">
                <v-text-field v-model="title" label="Добавьте заголовок" />
                <v-textarea v-model="text" label="Добавьте текст поста" maxlength="120" counter
                    single-line></v-textarea>
                <v-btn class="mt-2" type="submit" @click="$emit('submitFormChange', title, text)" block>
                    {{ props.button }}
                </v-btn>
            </v-form>
        </v-sheet>
    </v-card>
</template>
