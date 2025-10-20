import styles from './ServiceDetail.module.css'; 


type ServiceDetailPageProps = {
  params: {
    slug: string; 
  };
};


const serviceDetails: { [key: string]: { title: string; description: string } } = {
  'web-development': {
    title: 'Web Development',
    description: 'Kami membangun website kustom yang cepat, aman, dan responsif menggunakan framework modern seperti Next.js dan React untuk memastikan pengalaman pengguna terbaik.',
  },
  'mobile-app': {
    title: 'Mobile App Development',
    description: 'Solusi aplikasi mobile native (iOS & Android) dan hybrid untuk menjangkau pelanggan Anda di mana saja, kapan saja.',
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'Desain antarmuka yang intuitif dan berpusat pada pengguna. Kami membuat produk digital yang tidak hanya indah secara visual tetapi juga mudah digunakan.',
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    description: 'Optimalkan infrastruktur Anda dengan solusi cloud kami. Kami menyediakan layanan migrasi, manajemen, dan keamanan di platform AWS, Google Cloud, dan Azure.',
  },
};


export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug: slug,
  }));
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = params;
  
  
  const service = serviceDetails[slug] || {
    title: 'Layanan Tidak Ditemukan',
    description: 'Maaf, layanan yang Anda cari tidak ada.',
  };

  return (
    <div className="card"> 
      <h1 className={styles.title}>{service.title}</h1>
      <p className={styles.description}>
        {service.description}
      </p>
    </div>
  );
}