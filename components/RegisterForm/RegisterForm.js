const { default: axios } = require("axios");
const { useRouter } = require("next/dist/client/router");
const { useState } = require("react");

const RegisterForm = () => {
  const router = useRouter();
  const initialValues = {
    title: "",
    body: "",
  };
  const [registerUser, setRegisterUser] = useState(initialValues);
  const [image, setImage] = useState("");

  const updateImage = (event) => {
    setImage(event.target.value);
  };

  const changeData = (event) => {
    setRegisterUser({
      ...registerUser,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(
      "https://isdi-blog-posts-api.herokuapp.com/posts",
      registerUser
    );
    router.push("/");
  };

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <label htmlFor="name">
        Name
        <input
          placeholder="Enter your name"
          type="text"
          id="name"
          value={registerUser.name}
          onChange={changeData}
        />
      </label>
      <input id="image" type="text" image={image} onChange={updateImage} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
