import Link from 'next/link';
import styles from './home.module.css';

export default function HomePage() {
  return (
    <>
      
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Transformasi Digital untuk Bisnis Anda
        </h1>
        <p className={styles.subtitle}>
          Kami adalah TekTok, partner Anda dalam membangun solusi teknologi yang inovatif, modern, dan powerful.
        </p>
        <Link href="/services" className={styles.ctaButton}>
          Lihat Layanan Kami
        </Link>
      </section>

      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Mengapa Memilih Kami?</h2>
        <div className={styles.featuresGrid}>
          <div className={`card ${styles.featureCard}`}>
            <h3>Inovatif & Modern</h3>
            <p>Kami selalu menggunakan teknologi terbaru untuk memastikan produk Anda relevan dan berkinerja tinggi.</p>
          </div>
          <div className={`card ${styles.featureCard}`}>
            <h3>Desain User-Centric</h3>
            <p>Fokus pada pengalaman pengguna yang intuitif dan menyenangkan untuk meningkatkan kepuasan pelanggan.</p>
          </div>
          <div className={`card ${styles.featureCard}`}>
            <h3>Solusi Terukur</h3>
            <p>Pengembangan yang fleksibel dan dapat diskalakan sesuai dengan pertumbuhan dan kebutuhan bisnis Anda.</p>
          </div>
        </div>
      </section>

     
      <section className={styles.ctaSection}>
        <h2 className={styles.sectionTitle}>Siap Memulai Proyek Anda?</h2>
        <p className={styles.subtitle} style={{ color: '#333' }}>
          Hubungi kami sekarang untuk konsultasi gratis dan mari kita wujudkan ide Anda menjadi kenyataan.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Hubungi Kami
        </Link>
      </section>
    </>
  );
}