import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Patrick Joseph Osafo-Parry</h1>
          <p className="text-xl text-gray-600 mb-2">Tarkwa, Ghana | +233 24 864 0124 | osafoparrypatrickjoseph@gmail.com</p>
          <p className="text-xl text-indigo-600">LinkedIn: www.linkedin.com/in/patrick-joseph-osafo-parry-7a2a99266</p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Professional Summary</h2>
          <div className="bg-gradient-to-r from-indigo-500 to-red-400 p-8 rounded-lg shadow-md">
            <p className="text-gray-100 text-lg leading-relaxed">
              Results-driven Information Technology student at UMaT specializing on full-stack development and system analysis. 
              Experienced in IT support, database management, and developing responsive web apps. 
              Passionate about using scalable technology to address complicated organizational challenges.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-indigo-500 to-red-400 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-2">BSc in Information Technology (Candidate)</h3>
              <p className="text-indigo-200 mb-1">University of Mines and Technology (UMaT) – Tarkwa, Ghana</p>
              <p className="text-gray-200">Jan 2023 – Present</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-red-400 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-2">WASSCE, General Science</h3>
              <p className="text-indigo-200 mb-1">Mfantsipim School – Cape Coast, Ghana</p>
              <p className="text-gray-200">Sept 2019 – June 2022</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Technical Experience</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-500 to-red-400 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-2">IT Support Assistant (Intern)</h3>
              <p className="text-indigo-200 mb-4">Electricity Company of Ghana (ECG) | Oct 2024 – Nov 2024</p>
              <ul className="text-gray-200 space-y-2 list-disc list-inside">
                <li>Internal procedures were streamlined by installing and configuring the Windows operating system for corporate users.</li>
                <li>Resolved hardware and software technical issues for several departments, resulting in 0% downtime.</li>
                <li>Assisted with user training for new system implementations and security protocols.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-red-400 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-2">Project: Currency Converter Web Application</h3>
              <p className="text-indigo-200 mb-4">Personal Project</p>
              <p className="text-gray-200">
                Created a responsive web app utilizing JavaScript (ES6+) and Tailwind CSS to retrieve real-time currency rates from REST APIs.
                Asynchronous logic (Async/Await) has been implemented to ensure maximum speed and a seamless user experience.
              </p>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Technical Skills</h2>
            <div className="bg-gradient-to-r from-indigo-500 to-red-400 p-6 rounded-lg shadow-md">
              <ul className="text-gray-200 space-y-2">
                <li>Programming: JavaScript (Node.js, React), Python (Anaconda), HTML5, CSS3 (Tailwind/Bootstrap).</li>
                <li>Databases: MySQL, MongoDB, and Relational Database Design (ERDs).</li>
                <li>Systems Analysis: SDLC, UML Modeling (Use Case Diagrams), Requirements Gathering.</li>
                <li>Tools: Git, GitHub, Microsoft Office Suite, and Network Configuration.</li>
              </ul>
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Core Competencies & Certifications</h2>
            <div className="bg-gradient-to-r from-indigo-500 to-red-400 p-6 rounded-lg shadow-md">
              <ul className="text-gray-200 space-y-2">
                <li>Software Engineering: Frontend Development, API Integration, Responsive Design.</li>
                <li>Systems Thinking: Technical Documentation, Logical Problem Solving, System Installation.</li>
                <li>Leadership & Development: Cross-functional Collaboration, Regional Tech Advocacy.</li>
                <li>Student Member, GhIE (Ghana Institute of Engineers).</li>
                <li>Cybersecurity Fundamentals, Codecademy/TryHackMe (In-progress).</li>
                <li>Frontend Engineering, Alx (Complete).</li>
              </ul>
            </div>
          </section>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Languages</h2>
          <div className="bg-gradient-to-r from-indigo-500 to-red-400 p-6 rounded-lg shadow-md">
            <p className="text-gray-200 text-lg">English: Expert | Twi: Native | Spanish, French, and Japanese: Beginner</p>
          </div>
        </section>

        <div className="text-center">
          <a
            href="/Resume Letter.docx"
            download="Resume Letter.docx"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 inline-block text-lg font-semibold"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
