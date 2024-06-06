<script setup lang="ts">

import Post from './Post.vue';
import { posts } from '../mocs/posts';
import { ref, reactive } from 'vue';
import UpdatePost from './UpdatePost.vue'
import CreatePost from './CreatePost.vue'
import DeletePost from './DeletePost.vue'

const handleUpdatePost = (id: number) => {
    console.log(`update ${id} post`);
};

const handleDeletePost = (id: number) => {
    console.log(`delete ${id} post`);
};
const isOpen = ref(false);


const closeModal = (): void => {
    isOpen.value = !isOpen.value;
};


</script>

<template>
    <div class="bg-cyan-lighten-5 rounded-lg elevation-5 mt-5 mb-5 h-100 oveflow-auto">
        <div>
            <CreatePost />

        </div>
        <div no-gutters class="pa-6  ga-4 container-grid">
            <Post v-for="post in posts" :post="post" :elevation="6" :key="post.id" @closeModal="handleUpdatePost"
                @delete="handleDeletePost">
                <template #update>
                    <UpdatePost :post="post" />
                    <DeletePost :id="1" />
                </template>
            </Post>
        </div>
    </div>


</template>

<style>
.container-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
</style>
