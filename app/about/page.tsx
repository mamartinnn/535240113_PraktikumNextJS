import styles from './About.module.css'; 

export default function AboutPage() {
  return (
    <div className="card"> 
      <h1 className={styles.title}>Tentang Kami</h1>
      <div className={styles.content}>
        <p>
          TeknoKreatif Solutions adalah perusahaan teknologi fiktif yang didedikasikan
          untuk menyediakan solusi perangkat lunak canggih.
        </p>
        <p>
          Misi kami adalah membantu bisnis dari semua ukuran untuk berkembang di era digital
          melalui pengembangan web, aplikasi mobile, dan desain UI/UX yang luar biasa.
        </p>
      </div>
    </div>
  );
}