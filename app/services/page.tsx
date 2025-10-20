import Link from 'next/link';
import styles from './Services.module.css'; 


const services = [
  { id: 'web-development', name: 'Web Development' },
  { id: 'mobile-app', name: 'Mobile App Development' },
  { id: 'ui-ux-design', name: 'UI/UX Design' },
  { id: 'cloud-solutions', name: 'Cloud Solutions' },
];

export default function ServicesPage() {
  return (
    <div className="card"> 
      <h1 className={styles.title}>Layanan Kami</h1>
      <p className={styles.intro}>
        Klik layanan di bawah ini untuk melihat detail lebih lanjut:
      </p>
      <ul className={styles.serviceList}>
        {services.map((service) => (
          <li key={service.id} className={styles.serviceItem}>
            <Link
              href={`/services/${service.id}`}
              className={styles.serviceLink}
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}