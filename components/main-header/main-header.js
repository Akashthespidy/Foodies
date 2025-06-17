import Link from "next/link";
import classes from "./main-header.module.css";
import logoImg from "../../public/images/logo.png";
import Image from "next/image";
import NavLink from "./nav-link";
import MainHeaderBackground from "./main-header-background";
export default function MainHeader() {
  return (
    <>
      <header>
        <MainHeaderBackground />

        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="Logo Image " priority />
          Next level Meals
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Join Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
