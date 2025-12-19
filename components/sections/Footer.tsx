export default function Footer() {
  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-gray-900">CheaperBox</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {['About', 'How it works', 'Categories', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Legal */}
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Terms</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CheaperBox. Affiliate disclosure: We earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}
