export default function Product2Page() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* 헤더 */}
          <div className="mb-12 border-b border-gray-200 pb-8 dark:border-gray-800">
            <h1 className="text-4xl font-semibold text-gray-900 dark:text-white md:text-5xl">
              <span className="text-blue-600 dark:text-blue-400">제품</span> 2
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
          </div>

          {/* 컨텐츠 */}
          <div className="space-y-6">
            <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p className="text-xl font-medium text-gray-900 dark:text-white">
                제품 2에 대한 상세 정보입니다.
              </p>
              <p>
                고품질과 혁신적인 기술로 고객 여러분의 비즈니스 성공을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

