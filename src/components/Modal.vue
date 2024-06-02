<script setup lang="ts">
import { toRefs } from 'vue'
interface Props {
    isOpen: boolean
    title: string
}
const props = defineProps<Props>()

</script>

<template>
    <v-dialog max-width="500" width="fit-content" max-height="700" overflow-auto>
        <!-- butoon delete! -->
        <template v-slot:activator="{ props: isOpen }">
            <v-btn v-bind="isOpen" color="surface-variant" text="Open Dialog" variant="flat"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card :title="props.title">
                <v-btn density="default" icon="fas fa-xmark" class="position-absolute top-0 right-0 ma-2 "
                    @click="isActive.value = false" />
                <div class="pa-4">
                    <slot></slot>
                </div>
            </v-card>
        </template>
    </v-dialog>
</template>
