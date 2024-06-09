import { ref } from 'vue';
import { defineStore } from 'pinia';
import { IPost } from '../types/post';

const usePostsStore = defineStore('posts', () => {
  const posts = ref<IPost[]>([]);

  const setPosts = (newPosts: IPost[]) => {
    posts.value = newPosts;
  };

  const addPost = (newPost: IPost) => {
    posts.value = [...posts.value, newPost];
  };

  const updatePost = (newPost: IPost) => {
    posts.value = [...posts.value].map((post) => {
      if (post.id === newPost.id) {
        return newPost;
      }
      return post;
    });
  };

  const deletePost = (id: number) => {
    const newPosts = [...posts.value].filter((post) => post.id !== id);
    posts.value = newPosts;
  };

  return { posts, setPosts, addPost, deletePost, updatePost };
});

export { usePostsStore };
