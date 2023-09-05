import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header(props) {
  const isInfoPage =
    typeof window !== "undefined" && window.location.pathname === "/info";

  return (
    <header className={styles.header}>
      <nav
        className={styles.nav}
        role="navigation"
        aria-label="main navigation"
      >
        <a href="/">
          <h1>{props.siteTitle}</h1>
        </a>
        <div>
          {/* <Link href={isInfoPage ? "/" : "/info"}>
            <h1>{isInfoPage ? "close" : "info"}</h1>
          </Link> */}
          <a href="/">
            <h1>home</h1>
          </a>
          <a href="/blog/reading-guide">
            <h1>reading guide</h1>
          </a>
          {/* {isInfoPage ? (
            <a href="/">
              <h1>close</h1>
            </a>
          ) : (
            <a href="/info">info</a>
          )} */}
        </div>
      </nav>
    </header>
  );
}
