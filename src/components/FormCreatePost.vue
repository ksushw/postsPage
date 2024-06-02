<script setup lang="ts">
import { ref } from "vue"
import Modal from './Modal.vue'

const props = { title: '', text: '' }

const isOpen = ref(false)

const toggleModal = (): void => {
    isOpen.value = false
}

</script>

<template>
    <Modal title="Create post" :isOpen="isOpen">
        <v-sheet class="mx-auto" width="400">
            <v-form fast-fail @submit.prevent>
                <v-text-field v-model="props.title" label="Write a title" />
                <v-textarea v-model="props.text" label="Write a text" maxlength="120" counter single-line></v-textarea>
                <v-btn class="mt-2" type="button" block @click="toggleModal">Submit</v-btn>
            </v-form>
        </v-sheet>

    </Modal>
</template>
