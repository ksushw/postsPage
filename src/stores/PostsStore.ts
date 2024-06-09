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

  const updatePost = async (post: IPost) => {
    const response = await api.updatePost(post);
    posts.value = [...posts.value].map((post) => {
      if (post.id === response.id) {
        return response;
      }
      return post;
    });
  };

  const deletePost = async (id: number) => {
    await api.deletePost(id);
    const newPosts = [...posts.value].filter((post) => post.id !== id);
    posts.value = newPosts;
  };

  return { posts, getPosts, createPost, deletePost, updatePost };
});

export { usePostsStore };
