'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const supportTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 200); // 200ms 지연으로 사용자가 드롭다운으로 이동할 시간 제공
  };

  const handleSupportMouseEnter = () => {
    if (supportTimeoutRef.current) {
      clearTimeout(supportTimeoutRef.current);
    }
    setIsSupportOpen(true);
  };

  const handleSupportMouseLeave = () => {
    supportTimeoutRef.current = setTimeout(() => {
      setIsSupportOpen(false);
    }, 200);
  };

  return (
    <header className="relative sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500"></div>
      <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
        {/* 로고 */}
        <Link 
          href="/" 
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            NEXIN
          </span>
        </Link>

        {/* 네비게이션 메뉴 */}
        <nav className="flex items-center space-x-8">
          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            회사 소개
          </Link>
          
          {/* 제품 소개 드롭다운 */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="flex items-center text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              제품 소개
              <span className="ml-1 inline-block text-xs">▼</span>
            </button>
            
            {isProductsOpen && (
              <div 
                className="absolute left-0 top-full w-48 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
                style={{ marginTop: '0px' }}
              >
                <div className="py-1">
                  <Link
                    href="/products/product1"
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                  >
                    제품 1
                  </Link>
                  <Link
                    href="/products/product2"
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                  >
                    제품 2
                  </Link>
                  <Link
                    href="/products/product3"
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                  >
                    제품 3
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 고객 지원 드롭다운 */}
          <div 
            className="relative"
            onMouseEnter={handleSupportMouseEnter}
            onMouseLeave={handleSupportMouseLeave}
          >
            <button 
              className="flex items-center text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              고객 지원
              <span className="ml-1 inline-block text-xs">▼</span>
            </button>
            
            {isSupportOpen && (
              <div 
                className="absolute left-0 top-full w-48 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
                style={{ marginTop: '0px' }}
              >
                <div className="py-1">
                  <Link
                    href="/support/notice"
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                  >
                    공지 사항
                  </Link>
                  <Link
                    href="/support/inquiry"
                    className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                  >
                    문의 하기
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
