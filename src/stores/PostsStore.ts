import { ref } from 'vue';
import { defineStore } from 'pinia';
import { IPost } from '../types/post';
import api from '../api/postApi';

const usePostsStore = defineStore('posts', () => {
  const posts = ref<IPost[]>([]);

  const getPosts = async () => {
    const postsData = await api.getPosts();
    posts.value = postsData.reverse();
  };

  const createPost = async (post: IPost) => {
    const newPost = await api.createPost(post);
    posts.value = [newPost, ...posts.value];
  };

  const updatePost = async (newPost: IPost) => {
    const response = await api.updatePost(newPost);

    const index = posts.value.findIndex((item) => item.id === newPost.id);
    posts.value[index] = response;
  };

  const deletePost = async (id: number) => {
    await api.deletePost(id);
    const index = posts.value.findIndex((item) => item.id === id);
    posts.value.splice(index, 1);
  };

  return { posts, getPosts, createPost, deletePost, updatePost };
});

export { usePostsStore };
