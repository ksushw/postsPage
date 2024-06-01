<template>
    <v-card :title="'Item'">
        <template #text>
            <div class="mt-2">
                quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut
                ut
                quas totam\nnostrum rerum est autem sunt rem eveniet architecto
            </div>
        </template>
        <template #append>
            <div class="d-flex ga-3">
                <v-btn density="comfortable" variant="plain" icon="fas fa-pen" size="small"></v-btn>
                <v-btn density="comfortable" variant="plain" icon="fas fa-trash" size="small"></v-btn>
            </div>
        </template>
    </v-card>
</template>