import { TEST_ACTION } from "./actions";
import { createSlice } from "@reduxjs/toolkit";

interface TestReducerState {
  posts: UserObject[];
  idCount: number;
}

export interface UserObject {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const initialState: TestReducerState = {
  posts: [],
  idCount: 0,
};

export const testSlice = createSlice({
  name: "testSlice",
  initialState: initialState,
  reducers: {
    addPost(state) {
      state.posts.push({
        id: state.idCount,
        userId: state.idCount,
        body: "heyhey",
        title: "hey",
      });
      state.idCount += 1;
    },
  },
});

export default testSlice.reducer;
export const { addPost } = testSlice.actions;

// const testReducer = (
//   state = initialState,
//   action: { type: string; payload: any }
// ) => {
//   switch (action.type) {
//     case TEST_ACTION:
//       return {
//         ...state,
//         posts: [
//           ...state.posts,
//           {
//             userId: state.posts.length + 1,
//             id: state.posts.length + 1,
//             title:
//               "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//             body: "quia et",
//           },
//         ],
//       };
//     default:
//       return state;
//   }
// };

// export default testReducer;
