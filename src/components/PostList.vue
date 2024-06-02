<script setup lang="ts">

import Post from './Post.vue'
import { posts } from '../mocs/posts'

const handleUpdatePost = (id: number) => {
    console.log(`update ${id} post`)
}

const handleDeletePost = (id: number) => {
    console.log(`delete ${id} post`)
}


</script>

<template>
    <div no-gutters class="pa-6 bg-cyan-lighten-5 rounded-lg elevation-5 ga-4 container-grid">
        <Post v-for="post in posts" :post="post" :elevation="6" :key="post.id" @update="handleUpdatePost"
            @delete="handleDeletePost" />
        ;
    </div>
</template>

<style>
.container-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
</style>