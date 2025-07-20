import React from 'react';
import ProjectCard from '../components/ProjectCard';

// Example project data - more descriptive
const projects = [
  {
    title: 'CKC Quiz App',
    description: 'Ứng dụng quiz tương tác được xây dựng với Flutter và C#/.NET. Hỗ trợ nhiều loại câu hỏi, quản lý điểm số và giao diện thân thiện với người dùng.',
    imageUrl: 'https://via.placeholder.com/400x250/3b82f6/ffffff?text=CKC+Quiz',
    projectUrl: 'https://github.com/thongle321/CKCQUIZZ',
    tags: ['Flutter', 'Dart', 'C#', 'Vue.js', 'CSS'],
  },
  {
    title: 'PhoneShop Mobile App',
    description: 'Ứng dụng bán điện thoại trực tuyến với Flutter. Tính năng xem sản phẩm, giỏ hàng, thanh toán và quản lý đơn hàng. Backend sử dụng Express.js và MySQL.',
    imageUrl: 'https://via.placeholder.com/400x250/10b981/ffffff?text=PhoneShop',
    projectUrl: 'https://github.com/TQBao2ca3/DoAnLapTrinhDiDong',
    tags: ['Flutter', 'Dart', 'Express.js', 'MySQL', 'Node.js'],
  },
];

const HomePage: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section id="about" className="py-24 text-center bg-white">
        <div className="container mx-auto px-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-gray-200 shadow-lg"
          />
          <h1 className="text-5xl font-bold text-gray-800 mb-3">Hi, I'm a Developer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I specialize in building exceptional, high-quality websites and applications.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  projectUrl={project.projectUrl}
                  tags={project.tags}
                />
              ))}
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 text-center bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work and open to new opportunities.
          </p>
          <a
            href="sterbe2k4@gmail.com"
            className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;