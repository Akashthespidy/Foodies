import Link from "next/link";
import classes from "./main-header.module.css";
import logoImg from "../../public/images/logo.png";
import Image from "next/image";
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
    </>
  );
}
