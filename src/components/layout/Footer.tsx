export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-8 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Copyright © {currentYear} Nexin
          </p>
        </div>
      </div>
    </footer>
  );
}

