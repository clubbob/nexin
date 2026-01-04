export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500"></div>
      <div className="container mx-auto px-6 py-8 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Copyright © {currentYear} <span className="font-semibold text-blue-600 dark:text-blue-400">Nexin</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

