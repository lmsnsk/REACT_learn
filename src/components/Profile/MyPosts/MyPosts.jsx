import stl from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

function MyPosts(props) {
  let postElemets = props.postsData.map((userPost) => (
    <Post
      id={userPost.id}
      likesCount={userPost.likesCount}
      text={userPost.text}
      url={userPost.url}
    />
  ));

  let newPostElement = React.createRef();

  function addPostClick() {
    props.addPost();
  }

  function onPostChange() {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={stl.posts}>
      <p className={stl.poststitle}>My posts</p>
      <div>
        <form action="">
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
            className={stl.input}
            name="enterpost"
            ref={newPostElement}
            cols="70"
            rows="3"
          />
          <button onClick={addPostClick} className={stl.btn} type="submit">
            Add post
          </button>
        </form>
        {postElemets}
      </div>
    </div>
  );
}

export default MyPosts;
