import axios from "axios";
import Post from "../../components/Post/Post";

const SSGPage = ({ posts }) => (
  <>
    <h1>SSGPage</h1>
    {posts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </>
);

export default SSGPage;

export async function getStaticProps() {
  const urlAPI = "https://isdi-blog-posts-api.herokuapp.com/posts";
  const { data: posts } = await axios(urlAPI);

  return { props: { posts } };
}
