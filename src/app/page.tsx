export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Nexin 방문 감사합니다
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 md:text-xl">
              최고의 서비스와 품질로 고객 여러분을 만나뵙겠습니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
