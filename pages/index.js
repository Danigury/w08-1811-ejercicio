import axios from "axios";
import Post from "../components/Post/Post";

const ListPage = ({ posts }) => (
  <>
    <h1>ListPage</h1>
    {posts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </>
);

export async function getServerSideProps() {
  const { data: posts } = await axios(
    "https://isdi-blog-posts-api.herokuapp.com/posts"
  );

  return { props: { posts } };
}

export default ListPage;
