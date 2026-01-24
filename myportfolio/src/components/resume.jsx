import React from 'react';

const Resume = () => {
  const experience = [
    {
      title: 'Frontend Developer Intern',
      company: 'Tech Startup',
      period: '2023 - Present',
      description: 'Developed responsive web applications using React and modern CSS frameworks.'
    },
    {
      title: 'Web Development Bootcamp',
      company: 'Coding Academy',
      period: '2023',
      description: 'Completed intensive training in full-stack web development technologies.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University Name',
      year: '2023'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Resume</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{exp.title}</h4>
                  <p className="text-indigo-600 mb-2">{exp.company} | {exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{edu.degree}</h4>
                  <p className="text-indigo-600 mb-2">{edu.school}</p>
                  <p className="text-gray-600">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/path-to-your-resume.pdf"
            download
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 inline-block"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
