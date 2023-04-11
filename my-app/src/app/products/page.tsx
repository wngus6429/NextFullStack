import Link from 'next/link';
import { getProducts } from '@/service/product';
import styles from './page.module.css';

// const products = ['shirt', 'pants', 'skirt', 'shoes'];

// export const revalidate = 3;

export default async function ProductsPage() {
  //! 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줄 예정
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    next: { revalidate: 3 },
    // cache: 'no-store' 이것도 SSR처럼 된다.
    // SSG를 ISR로 이렇게 활용할수 있다.
    // 값을 0으로 하면 요청할떄마다 바뀜, SSR으로 되는거지
  });
  const data = await res.json();
  const factText = data.data[0];
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {/* {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))} */}
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </>
  );
}
