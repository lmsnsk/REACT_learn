import stl from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postElemets = props.postsDataMyPosts.map((userPost) => (
    <Post
      id={userPost.id}
      likesCount={userPost.likesCount}
      text={userPost.text}
      url={userPost.url}
    />
  ));

  return (
    <div className={stl.posts}>
      <p className={stl.poststitle}>My posts</p>
      <div>
        <form action="">
          <textarea
            className={stl.input}
            name="enterpost"
            id="enterpost"
            cols="70"
            rows="3"
            placeholder="Ваши новости..."
          ></textarea>
          <button className={stl.btnh} type="submit"></button>
          <button className={stl.btn} type="submit">
            Отправить
          </button>
        </form>
        {postElemets}
      </div>
    </div>
  );
}

export default MyPosts;
