const AboutPage = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
    'Tailwind CSS', 'Git', 'Firebase'
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
        <div className="space-y-6 text-gray-600 mb-12">
          <p className="text-lg leading-relaxed">
            Hello! I'm a junior developer with a love for creating elegant solutions 
            to complex problems.
          </p>
          <p className="text-lg leading-relaxed">
            My journey in tech started with curiosity and has evolved into a career dedicated to 
            continuous learning and innovation. I believe in writing clean, maintainable code and 
            creating experiences that users love.
          </p>
          <p className="text-lg leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
            projects, or sharing knowledge with the developer community.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg text-gray-700 hover:border-blue-400 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;