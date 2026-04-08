import React from 'react';

const Resume = () => {
  const experience = [
    {
      title: 'IT Support Intern',
      company: 'Electricity Company of Ghana',
      period: 'October 2024 - November 2024',
      description: 'Provided technical support and troubleshooting for internal teams and clients.'
    },
    {
      title: 'Intern',
      company: 'Electricity Company of Ghana',
      period: 'October 2025 - November 2025',
      description: 'Completed intensive training in full-stack web development technologies.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Information Systems and Technology',
      school: 'University of Mines and Technology',
      year: '2023 - 2026'
    },
    {
      degree: 'High School Certificate',
      school: 'Mfantsipim School',
      year: '2019 - 2022'
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
                <div key={index} className="bg-gradient-to-r from-indigo-500 to-red-400 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                  <p className="text-indigo-200 mb-2">{exp.company} | {exp.period}</p>
                  <p className="text-gray-200">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-500 to-red-400 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-gray-200 mb-2">{edu.school}</p>
                  <p className="text-gray-200">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://example.com/your-resume.pdf"
            download="Patrick_Osafo_Resume.pdf"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Full Resume (Update link with your PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
