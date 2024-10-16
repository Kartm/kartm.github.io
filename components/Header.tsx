import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

interface MenuOption {
  href: string;
  title: string;
}

export default function Header() {
  const menuOptions: MenuOption[] = [
    { href: "/", title: "Home" },
    { href: "/projects/masters-thesis", title: "Projects" },
  ];

  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          {menuOptions.map((option) => (
            <li
              className={router.asPath === option.href ? styles.active : ""}
              key={option.href}
            >
              <Link href={option.href}>{option.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
