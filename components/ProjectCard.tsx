import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
      </div>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;