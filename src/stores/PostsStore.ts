import { ref } from 'vue';
import { defineStore } from 'pinia';
import { IPost } from '../types/post';
import api from '../api/postApi';

const usePostsStore = defineStore('posts', () => {
  const posts = ref<IPost[]>([]);

  const setPosts = async () => {
    const postsData = await api.getPosts();
    posts.value = postsData;
  };

  const createPost = async (post: IPost) => {
    const newPost = await api.createPost(post);
    posts.value = [...posts.value, newPost];
  };

  const updatePost = async (post: IPost) => {
    const responce = await api.updatePost(post);
    posts.value = [...posts.value].map((post) => {
      if (post.id === responce.id) {
        return responce;
      }
      return post;
    });
  };

  const deletePost = async (id: number) => {
    await api.deletePost(id);
    const newPosts = [...posts.value].filter((post) => post.id !== id);
    posts.value = newPosts;
  };

  return { posts, setPosts, createPost, deletePost, updatePost };
});

export { usePostsStore };
