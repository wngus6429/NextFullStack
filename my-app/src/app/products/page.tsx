import Link from 'next/link';
import styles from './layout.module.css';
import { getProducts } from '@/service/product';

// const products = ['shirt', 'pants', 'skirt', 'shoes'];

export const revalidate = 3;

export default async function ProductsPage() {
  //! 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줄 예정
  const products = await getProducts();
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
    </>
  );
}
