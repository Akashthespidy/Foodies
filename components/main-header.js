import Link from "next/link";
import classes from "./main-header.module.css";
export default function MainHeader() {
  return (
    <header>
      <Link className={classes.logo} href="/">
        <img src="images/logo.png" alt="Logo Image " />
        Next level Meals
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
          <li>
            <Link href="/meals/share">Share Meals</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
