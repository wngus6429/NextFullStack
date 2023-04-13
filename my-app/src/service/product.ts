import path from 'path';
import { promises as fs } from 'fs';

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

// 이름을 ts로 함으로 인해 순수 로직만 담긴것을 표시
// 밑에 JSON.parse가 비동기로 진행될거라 Promise지정한거임
// 다음으로, path 모듈의 join 메소드를 호출합니다.
// path.join() 메소드는 여러개의 인자를 받아서 이들을 모두 이어붙인 하나의 경로 문자열을 반환
// process.cwd() 메소드는 현재 작업 디렉토리를 반환
// data/products.json 라는 경로를 합쳐서, filePath 변수에 저장
export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  // fs.readFile() 함수는 비동기 함수이며, 파일을 비동기적으로 읽음 이 함수는 Promise 객체를 반환
  // 파일의 내용을 나타내는 문자열 데이터를 반환합니다.
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id); // 있으면 반환, 없으면 undefined
}
