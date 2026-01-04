export default function InquiryPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* 헤더 */}
          <div className="mb-12 border-b border-gray-200 pb-8 dark:border-gray-800">
            <h1 className="text-4xl font-semibold text-gray-900 dark:text-white md:text-5xl">
              <span className="text-blue-600 dark:text-blue-400">문의</span> 하기
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
          </div>

          {/* 컨텐츠 */}
          <div className="space-y-6">
            <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p className="text-xl font-medium text-gray-900 dark:text-white">
                궁금한 사항이 있으신가요?
              </p>
              <p>
                Nexin은 고객 여러분의 문의사항을 신속하고 정확하게 처리해드리겠습니다.
              </p>
              <p>
                아래 연락처를 통해 언제든지 문의해 주시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

