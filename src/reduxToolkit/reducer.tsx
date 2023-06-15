import { createReducer } from "@reduxjs/toolkit/dist/createReducer";
import { TEST_ACTION } from "./actions";

export interface UserObject {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const initialState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ],
};

const testReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            userId: state.posts.length + 1,
            id: state.posts.length + 1,
            title:
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et",
          },
        ],
      };
    default:
      return state;
  }
};

export default testReducer;
