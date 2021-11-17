import Link from "next/link";
import style from "./Header.module.css";

const Header = () => (
  <ul className={style.nav}>
    <Link href="/">
      <a className={style.navelement}>CSR List</a>
    </Link>
    <Link href="/ssg">
      <a className={style.navelement}>SSG List</a>
    </Link>
    <Link href="/create">
      <a className={style.navelement}>Create</a>
    </Link>
  </ul>
);

export default Header;
