import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl, tags }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
      <div className="relative overflow-hidden">
        <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
        <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg font-semibold border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            View Project
          </a>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map(tag => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;