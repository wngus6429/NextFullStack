import Link from 'next/link';
import styles from './layout.module.css';

const products = ['shirt', 'pants', 'skirt', 'shoes'];

export default function ProductsPage() {
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            <Link href={`products/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
