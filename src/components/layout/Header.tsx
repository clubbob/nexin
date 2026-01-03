import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
        {/* 로고 */}
        <Link 
          href="/" 
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            NEXIN
          </span>
        </Link>

        {/* 네비게이션 메뉴 */}
        <nav className="flex items-center space-x-8">
          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            회사 소개
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            제품 소개
          </Link>
          <Link
            href="/support"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            고객 지원
          </Link>
        </nav>
      </div>
    </header>
  );
}

