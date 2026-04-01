function Skills() {
  return (
    <div className="min-h-screen flex items-center justify- center flex-col bg-gray-50 py-16 px-4">
      <div className="bg-gradient-to-tr from-indigo-400 via-pink-400 to-yellow-300 rounded-2xl shadow-xl p-12 text-center">
        <h1 className="text-5xl font-bold">My Skills</h1>
      </div>
      <div>
        <ul className="list-disc list-inside text-left mt-6 text-gray-700 text-lg space-y-2 ">
          <li>JavaScript</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Responsive Design</li>
          <li>UI/UX Design</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
