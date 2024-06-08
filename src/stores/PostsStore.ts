import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { IPost } from '../types/post';

const usePostsStore = defineStore('posts', () => {
  const posts = ref<IPost[]>([]);

  const addPosts = (newPosts: IPost[]) => {
    posts.value = newPosts;
  };

  const putPost = (post: IPost) => {
    posts.value = [...posts.value, post];
  };

  const deletePost = (id: number) => {
    const newPosts = [...posts.value].filter((post) => post.id !== id);
    posts.value = newPosts;
  };

  return { posts, addPosts, putPost, deletePost };
});

export { usePostsStore };
