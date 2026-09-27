import Link from "next/link";
import Image from "next/image";

import css from "./main-header.module.css";

import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./navlink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={css.header}>
        <Link className={css.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" />
          NextLevel Food
        </Link>

        <nav className={css.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
