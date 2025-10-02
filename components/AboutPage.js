const AboutPage = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
    'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Git', 'REST APIs'
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
        <div className="space-y-6 text-gray-600 mb-12">
          <p className="text-lg leading-relaxed">
            Hello! I'm a passionate full-stack developer with a love for creating elegant solutions 
            to complex problems. With several years of experience in web development, I specialize 
            in building responsive, user-friendly applications that make a difference.
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

        <div>
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h4 className="text-xl font-semibold mb-2">Senior Full Stack Developer</h4>
              <p className="text-gray-600 mb-2">Tech Company • 2022 - Present</p>
              <p className="text-gray-500">
                Leading development of enterprise applications and mentoring junior developers
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6 py-2">
              <h4 className="text-xl font-semibold mb-2">Full Stack Developer</h4>
              <p className="text-gray-600 mb-2">Startup Inc • 2020 - 2022</p>
              <p className="text-gray-500">
                Built and maintained multiple web applications using modern frameworks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
