'use client';
import React, { useEffect, useState } from 'react';
import styles from './MeowArticle.module.css';

export default function MeowArticle() {
  const [text, setText] = useState('데이터 준비중...');
  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com')
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);
  return <article className={styles.article}>{text}</article>;
}

// const res = await fetch('https://meowfacts.herokuapp.com', {
//       next: { revalidate: 3 },
//       // cache: 'no-store' 이것도 SSR처럼 된다.
//       // SSG를 ISR로 이렇게 활용할수 있다.
//       // 값을 0으로 하면 요청할떄마다 바뀜, SSR으로 되는거지
//     });
//     const data = await res.json();
//     const factText = data.data[0];
