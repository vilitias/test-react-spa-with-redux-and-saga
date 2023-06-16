import { useDispatch } from "react-redux/es/exports";
import { TEST_ACTION } from "../reduxToolkit/actions";
import { useSelector } from "react-redux";
import { UserObject } from "../reduxToolkit/reducer";
import { useEffect } from "react";
import { RootState } from "../reduxToolkit/store";

const Main = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state);

  return (
    <>
      <div>MAIN: post list</div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: TEST_ACTION });
            console.log(store);
          }}
        >
          Click
        </button>

        {store.testReducer.posts.map((post) => (
          <>
            <div>ID : {post.id}</div>
            <div>Title: {post.title}</div>
            <div>{post.body}</div>
          </>
        ))}
      </div>
    </>
  );
};

export default Main;
