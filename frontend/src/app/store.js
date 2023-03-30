import { configureStore } from '@reduxjs/toolkit';
import signupReducer from '../features/Authentication/Signup';

export default configureStore({
  reducer: {
    posts:signupReducer
  }
});
