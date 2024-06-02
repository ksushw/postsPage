<script setup lang="ts">
import PostList from './components/PostList.vue'
import Modal from './components/Modal.vue'
</script>

<template>
  <v-app>
    <v-container>
      <PostList />
      <Modal title="title" submitTitle="Send" :isOpen="true">
      </Modal>
    </v-container>
  </v-app>
</template>
