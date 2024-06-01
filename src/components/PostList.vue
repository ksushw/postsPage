<script setup>
import { ref } from 'vue'
import Post from './Post.vue'

const handleUpdatePost = (id) => {
    console.log(`update ${id} post`)
}

const handleDeletePost = (id) => {
    console.log(`delete ${id} post`)
}
</script>

<template>
    <div no-gutters class="pa-6 bg-cyan-lighten-5 rounded-lg elevation-5 ga-4 container-grid">
        <Post :elevation="6" v-for="n in 6" :key="n" @update="handleUpdatePost" @delete="handleDeletePost" />;
    </div>
</template>

<style>
.container-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
</style>