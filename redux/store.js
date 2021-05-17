import { configureStore } from '@reduxjs/toolkit';
import PostsReducer from './postsReducer';

export default configureStore({
  reducer: {
    postsReducer: PostsReducer,
  },
});
