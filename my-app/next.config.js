/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

// appDir 옵션은 Next.js의 실험적인 기능 중 하나입니다. 이 옵션을 설정하면, Next.js 애플리케이션의 디렉토리 구조를 변경할 수 있습니다.
// 일반적으로, Next.js 애플리케이션은 pages, public, styles 등의 디렉토리로 구성되어 있습니다.
// appDir 옵션을 사용하면, 이러한 기본 디렉토리 구조를 변경할 수 있습니다. 예를 들어, appDir: 'src'로 설정하면, pages, public, styles 디렉토리를 src 디렉토리 아래에 위치시킬 수 있습니다.
// appDir: true로 설정하면, Next.js 애플리케이션의 루트 디렉토리를 앱 디렉토리로 사용하도록 설정됩니다.
