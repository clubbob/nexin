export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* 헤더 */}
          <div className="mb-12 border-b border-gray-200 pb-8 dark:border-gray-800">
            <h1 className="text-4xl font-semibold text-gray-900 dark:text-white md:text-5xl">
              회사 소개
            </h1>
          </div>

          {/* 컨텐츠 */}
          <div className="space-y-6">
            <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p className="text-xl font-medium text-gray-900 dark:text-white">
                Nexin에 오신 것을 환영합니다.
              </p>
              <p>
                저희는 고객 만족을 최우선으로 생각하며, 최고의 서비스를 제공하기 위해 노력하고 있습니다.
              </p>
              <p>
                혁신적인 기술과 품질로 고객 여러분의 성공을 함께 만들어가겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

