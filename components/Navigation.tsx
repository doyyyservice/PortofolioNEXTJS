import { Menu, X } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, menuOpen, setMenuOpen }) => {
  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Connect', id: 'connect' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Portfolio
          </button>

          <div className="hidden md:flex gap-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={\`transition-colors \${currentPage === item.id
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-600 hover:text-blue-600'}\`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMenuOpen(false);
                }}
                className={\`block w-full text-left px-4 py-2 rounded-lg transition-colors \${currentPage === item.id
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50'}\`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;