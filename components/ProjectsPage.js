import ProjectCard from './ProjectCard'

const ProjectsPage = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates and team features',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system for creative professionals and agencies',
      tech: ['Next.js', 'Prisma', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking with interactive maps and forecasts',
      tech: ['React', 'OpenWeather API', 'Chart.js'],
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
        <p className="text-xl text-gray-600 mb-12">
          Here are some of my recent works
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
