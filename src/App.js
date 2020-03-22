import React from "react";
import PostFotmContainer from "./components/PostFotmContainer";
import FetchedPost from "./components/FetchedPost";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostFotmContainer />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPost posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
