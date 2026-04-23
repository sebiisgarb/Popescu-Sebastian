export function Footer() {
  return (
    <footer className="bg-[#070b14] border-t border-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Sebastian Popescu
          </span>
          {' '}— Built with React, TypeScript & TailwindCSS
        </p>
      </div>
    </footer>
  );
}
