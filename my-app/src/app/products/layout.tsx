import Link from 'next/link';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 확인해보세요',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function ProduectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/products/women'>여성옷</Link>
        <Link href='/products/man'>여성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
