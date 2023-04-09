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
export default function PantsPage({ params }: Props) {
  if (params.slug === 'nothing') {
    notFound();
  }
  return <h1>{params.slug}페이지</h1>;
}

//! 밑에 이렇게 함으로서 페이지 미리생성이 가능하다.
export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product,
  }));
}
