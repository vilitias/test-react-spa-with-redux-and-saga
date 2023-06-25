import { useDispatch } from "react-redux/es/exports";
import { TEST_ACTION } from "../store/actions";
import { useSelector } from "react-redux";
import { UserObject, addPost } from "../store/reducer";
import { RootState } from "../store/store";

const Main = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state);

  return (
    <>
      <div>MAIN: post list</div>
      <div>
        <button
          onClick={() => {
            dispatch(addPost());
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
