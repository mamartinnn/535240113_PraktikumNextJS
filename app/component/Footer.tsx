import Link from 'next/link';
import styles from './Footer.module.css';



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerColumn}>
          <h3>TekTok Solutions</h3>
          <p>
            Solusi digital inovatif untuk mentransformasi bisnis Anda di era modern.
          </p>
         
        </div>

        <div className={styles.footerColumn}>
          <h3>Navigasi</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">Tentang Kami</Link></li>
            <li><Link href="/services">Layanan</Link></li>
            <li><a href="#">Kontak</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>Kontak Kami</h3>
          <p>
            Jl. Teknologi Raya No. 123<br />
            Jakarta, Indonesia<br />
            Email: kontak@TekTok.com<br />
            Telepon: (021) 555-1234
          </p>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {currentYear} TekTok Solutions. All Rights Reserved.
      </div>
    </footer>
  );
}