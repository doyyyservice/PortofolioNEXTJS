'use client'
import { useState } from 'react'
import Navigation from '../components/Navigation'
import HomePage from '../components/HomePage'
import AboutPage from '../components/AboutPage'
import ProjectsPage from '../components/ProjectsPage'
import ConnectPage from '../components/ConnectPage'
import Footer from '../components/Footer'

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />
      case 'about':
        return <AboutPage />
      case 'projects':
        return <ProjectsPage />
      case 'connect':
        return <ConnectPage />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      
      <main className="pt-16">
        {renderPage()}
      </main>

      <Footer />
    </div>
  )
}
