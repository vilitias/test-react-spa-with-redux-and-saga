import { combineReducers, configureStore } from "@reduxjs/toolkit";
import testReducer from "./reducer";

const rootReducer = combineReducers({
  testReducer: testReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
