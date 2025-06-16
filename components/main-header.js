import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src="images/logo.png" alt="Logo Image " />
        Next level Meals
      </Link>
      <nav>
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
