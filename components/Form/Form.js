import axios from "axios";
import { useRouter } from "next/dist/client/router";

const { useState } = require("react");

const Form = () => {
  const router = useRouter();
  const initialValues = {
    title: "",
    body: "",
  };

  const [postData, setPostData] = useState(initialValues);

  const changeData = (event) => {
    setPostData({
      ...postData,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(
      "https://isdi-blog-posts-api.herokuapp.com/posts",
      postData
    );
    router.push("/");
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="title">
          Title
          <input
            placeholder="Enter your title"
            type="text"
            id="title"
            value={postData.title}
            onChange={changeData}
          />
        </label>
        <label htmlFor="body">
          Description
          <input
            placeholder="Enter your post"
            type="text"
            id="body"
            value={postData.body}
            onChange={changeData}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default Form;
