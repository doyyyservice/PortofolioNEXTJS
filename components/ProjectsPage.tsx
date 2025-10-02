import ProjectCard from './ProjectCard';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Mini Martketplace',
      description: 'Full-stack Mini Marketplace built-in with role management, admin management',
      tech: ['Next.js', 'Node.js', 'Firebase Auth', 'Firebase Firestorage', 'Tailwind CSS'],
      link: 'https://www.kedairiver.my.id'
    },
    {
      title: 'Simple downloader',
      description: 'simple downloader from several applications as follows: tiktok, Instagram, youtube audio, youtube mp4, spotify',
      tech: ['Next.js', 'Node.js', 'Tailwind CSS'],
      link: 'https://www.doyyyservice.my.id'
    }
  ];

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
  );
};

export default ProjectsPage;