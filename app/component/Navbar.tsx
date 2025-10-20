import Link from 'next/link';
import styles from './Navbar.module.css'; 

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          TekTok
        </Link>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
        </div>
      </div>
    </nav>
  );
}