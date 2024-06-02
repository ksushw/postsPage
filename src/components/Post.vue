<script setup lang="ts">

interface Props {
    post: {
        "userId": number,
        "id": number,
        "title": string,
        "body": string
    }
}

const props = defineProps<Props>()
</script>

<template>
    <v-card :title="props.post.title">
        <template #text>
            <div class="mt-2">
                {{ props.post.body }}
            </div>
        </template>
        <template #append>
            <div class="d-flex ga-3">
                <v-btn density="comfortable" variant="plain" icon="fas fa-pen" size="small"
                    @click="$emit('update', 1)"></v-btn>
                <v-btn density="comfortable" variant="plain" icon="fas fa-trash" size="small"
                    @click="$emit('delete', 1)"></v-btn>
            </div>
        </template>
    </v-card>
</template>