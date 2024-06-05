<script setup lang="ts">
import FormCreatePost from './FormCreatePost.vue';

const handleSubmitForm = (title: string, text: string) => {
    console.log(title, text);
};
</script>

<template>
    <v-dialog max-width="500" width="fit-content" max-height="700" overflow-auto>
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" variant="tonal" text="Создать пост" class="bg-cyan-darken-1"></v-btn>
        </template>
        <template v-slot:default="{ isActive }">
            <div class="position-relative">
                <v-btn density="default" icon="fas fa-xmark" class="position-absolute top-0 right-0 ma-2"
                    @click="isActive.value = false" style="z-index: 1" />
                <FormCreatePost formName="Создать пост" title="" text="" button="Создать"
                    @submitFormChange="handleSubmitForm"></FormCreatePost>
            </div>
        </template>
    </v-dialog>
</template>
