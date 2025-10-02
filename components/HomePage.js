import { Code2 } from 'lucide-react'

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Code2 className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer & Designer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Crafting beautiful, functional digital experiences with modern web technologies
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={() => setCurrentPage('connect')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
