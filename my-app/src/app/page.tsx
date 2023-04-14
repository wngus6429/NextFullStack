// import Image from 'next/image';
// import { Inter } from '@next/font/google';
// import styles from './page.module.css';
import Counter from '@/components/Counter';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import os from 'os'; // 노드 APIS

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // notFound();
  console.log('안녕 ! 서버');
  console.log(os.hostname());
  return (
    <>
      <h1>홈페이지 버전5</h1>
      <Counter />
      <Image
        src='https://ac.namu.la/20230412sac/547d6d5dc7bc6e247cd774f027034281a77438576ae9b4d12d201b4680d4ae68.png?expires=1681321642&key=6XLGs2rUAVbpSUKPVQge_A'
        alt='girl'
        width={320}
        height={500}
        priority
      />
      <Image
        src='https://ac.namu.la/20230412sac/b27acb07296f40a2107b8bc8f04cea24d429574524f4904f3d052e97ab28896f.png?expires=1681321642&key=xUEIz2jbGEaX8zPj-BjTqA'
        alt='girl'
        width={320}
        height={500}
      />
    </>
  );
}
