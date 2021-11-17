import style from "./Post.module.css";

const Post = ({ post }) => (
  <li className={style.post} key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </li>
);

export default Post;
