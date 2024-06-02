<script setup lang="ts">
interface Props {
    isOpen: boolean
    title: string
}
const props = defineProps<Props>()
</script>

<template>
    <v-dialog max-width="500" max-height="700" overflow-auto>
        <!-- butoon delete! -->
        <template v-slot:activator="{ props: isOpen }">
            <v-btn v-bind="isOpen" color="surface-variant" text="Open Dialog" variant="flat"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card :title="props.title">
                <v-card-actions>
                    <v-btn density="default" icon="fas fa-xmark" class="position-absolute top-0 right-0 ma-2 "
                        @click="isActive.value = false"></v-btn>
                </v-card-actions>
                <slot></slot>
            </v-card>
        </template>
    </v-dialog>
</template>
