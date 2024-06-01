<script setup>
import Post from './Post.vue'
</script>

<template>
    <div no-gutters class="pa-6 bg-cyan-lighten-5 rounded-lg elevation-5 ga-4 container-grid">
        <Post :elevation="6" v-for="n in 6" :key="n" />;
    </div>
</template>

<style>
.container-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
</style>