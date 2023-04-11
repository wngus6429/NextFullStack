import { getProduct, getProducts } from '@/service/product';
import { notFound } from 'next/navigation';

//! props 안에 params
type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}
// params.slug // 다이나믹 라우트
export default async function ProductPage({ params: { slug } }: Props) {
  // if (params.slug === 'nothing') {
  //   notFound();
  // }
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return <h1>{product.name}페이지</h1>;
}

//! 밑에 이렇게 함으로서 페이지 미리생성이 가능하다.
export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임(SSG)
  // const products = ['pants', 'skirt'];
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
