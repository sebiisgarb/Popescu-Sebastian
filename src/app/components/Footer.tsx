export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Sebastian Popescu. Built with React, TypeScript & TailwindCSS
        </p>
        <p className="text-gray-500 text-sm mt-2">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
