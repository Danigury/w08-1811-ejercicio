import Link from "next/link";

const Header = () => (
  <ul>
    <Link href="/">
      <a>List</a>
    </Link>
    <Link href="/create">
      <a>Create</a>
    </Link>
  </ul>
);

export default Header;
