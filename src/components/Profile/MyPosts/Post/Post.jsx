import stl from "./Post.module.css";

function Post(props) {
  return (
    <div className={stl.post}>
      <img className={stl.postimg} src={props.url} alt="avatar" />
      <p>{props.text}</p>
    </div>
  );
}

export default Post;
