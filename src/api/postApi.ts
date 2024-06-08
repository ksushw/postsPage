import { instance } from './axios';
import { IPost } from '../types/post';

const createPost = async (post: IPost) => {
  return instance
    .post('/posts', {
      userId: post.userId,
      title: post.title,
      body: post.body,
    })
    .then(function (response) {
      return response.data;
    });
};

const getPosts = async () => {
  return instance
    .get('/posts')
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return [];
    });
};

const updatePost = async (post: IPost) => {
  return instance
    .patch(`/posts/${post.id}`, {
      title: post.title,
      body: post.body,
    })
    .then(function (response) {
      return response.data;
    });
};

const deletePost = async (id: number) => {
  return instance.delete(`/posts/${id}`).then(function (response) {
    return response.data;
  });
};

export { createPost, getPosts, updatePost, deletePost };