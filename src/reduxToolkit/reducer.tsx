import { createReducer } from "@reduxjs/toolkit/dist/createReducer";
import { TEST_ACTION } from "./actions";

interface TestReducerState {
  posts: UserObject[];
}

export interface UserObject {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const initialState: TestReducerState = {
  posts: [],
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
