"use client";

import css from "./Header.module.css";
import Link from "next/link";

import Image from "next/image";
import Container from "../Container/Container";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isHomeActive = pathname === "/";
  const isCatalogActive = pathname === "/catalog";

  // Невелика утиліта для збирання класів
  const cx = (...cls: Array<string | false | null | undefined>) =>
    cls.filter(Boolean).join(" ");

  const navLinks = [
    { href: "/", label: "Home", active: isHomeActive },
    { href: "/catalog", label: "Catalog", active: isCatalogActive },
  ] as const;
  return (
    <header className={css.header}>
      <Container>
        <div className={css.wrapperNav}>
          <Link href="/" aria-label="Home">
            <Image
              src="/logoRentalCar.svg"
              width={101}
              height={16}
              alt="Rental Car Logo"
            />
          </Link>
          <nav aria-label="Main Navigation">
            <ul className={css.navigationList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cx(css.link, link.active && css.active)}
                    aria-current={link.active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
