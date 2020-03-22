import React from "react";
import Post from "./Post";
import { fetchedPosts } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./common/Loader";

const FetchedPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.fetchedPosts);
  const loading = useSelector(state => state.app.loading);

  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <div>
        <button
          onClick={() => {
            dispatch(fetchedPosts());
          }}
          className="btn btn-primary"
        >
          Загрузить
        </button>
      </div>
    );
  }
  return posts.map(post => {
    return <Post key={post.id} post={post} />;
  });
};

export default FetchedPost;
