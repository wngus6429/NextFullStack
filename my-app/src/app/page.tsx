// import Image from 'next/image';
// import { Inter } from '@next/font/google';
// import styles from './page.module.css';
import Counter from '@/components/Counter';
import { notFound } from 'next/navigation';
import os from 'os'; // 노드 APIS

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // notFound();
  console.log('안녕 ! 서버');
  console.log(os.hostname());
  return (
    <>
      <h1>홈페이지</h1>
      <Counter />
    </>
  );
}
