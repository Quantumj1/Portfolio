
import React, { useMemo } from 'react';
import bg from '../assets/bg.jpg';
import { Link } from 'react-router-dom';
import pat from '../images/pat.jpg';


// Prefer explicit image in src/images if present
let preferredImage = null;
try {
	// attempt to require the exact image path
	preferredImage = new URL('../../src/images/photo_2025-07-07_11-47-17.jpg', import.meta.url).href;
} catch {
	preferredImage = null;
}

// Load any image assets in src/assets via Vite
const modules = import.meta.glob('../assets/*.{jpg,jpeg,png,svg}', { eager: true });

const About = () => {
	const profileSrc = useMemo(() => {
		if (preferredImage) return preferredImage;

		const entries = Object.entries(modules);
		if (!entries.length) return null;

		// prefer filenames containing 'profile' or 'avatar'
		const preferred = entries.find(([path]) => /profile|avatar/i.test(path));
		if (preferred) {
			const mod = preferred[1];
			return (mod && mod.default) || null;
		}

		// otherwise use the first available image
		const first = entries[0][1];
		return (first && first.default) || null;
	}, []);

		const skills = [
			{ name: 'React', color: 'from-cyan-500 to-blue-500' },
			{ name: 'Tailwind CSS', color: 'from-pink-500 to-red-500' },
			{ name: 'JavaScript', color: 'from-yellow-400 to-orange-400' },
			{ name: 'Bootstrap', color: 'from-indigo-500 to-purple-500' },
			{ name: 'Vite', color: 'from-green-400 to-emerald-500' },
			{ name: 'Git', color: 'from-gray-500 to-gray-700' },
			{ name: 'Figma', color: 'from-pink-400 to-yellow-300' },
			{ name: 'Accessibility', color: 'from-blue-400 to-green-400' },
		];

		return (
			<div className="bg-cover bg-center bg-fixed min-h-screen w-full overflow-hidden relative z-0" 
				  style={{ backgroundImage: `url(${bg})` }}>
				<div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
					<div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl px-4 sm:px-8 mt-14 sm:mt-20 md:p-12 grid md:grid-cols-3 gap-6 md:gap-8 
					items-center">
						{/* Profile column */}
						{profileSrc && (
							<div className="md:col-span-1 flex flex-col items-center md:items-start">

								<div className="rounded-full p-1 bg-gradient-to-tr from-indigo-400 via-pink-400 to-yellow-300 sm:mt-2">
									<img
										src={pat}
										alt="Profile"
										className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover block shadow-2xl border-4 border-white "
									/>
								</div>
								<h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold text-gray-800 text-center md:text-left">Hello, I'm Patrick Joseph Osafo-Parry</h3>
								<p className="text-sm text-gray-600 mt-2 text-center md:text-left">Frontend Engineer · UI/UX enthusiast</p>
									<div className="mt-4 sm:mt-6 flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
										<a href="mailto:osafoparrypatrickjoseph@gmail.com" className="inline-flex items-center px-3 sm:px-4 py-2 
										bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 transition text-sm sm:text-base">Email Me</a>
										<Link to="/resume" className="inline-flex items-center px-3 sm:px-4 py-2 bg-white border border-gray-200 
										text-gray-800 rounded-md shadow-sm hover:shadow-md transition bg-gradient-to-r from-red-400 
										to-yellow-300 text-sm sm:text-base">Resume</Link>
									</div>
							</div>
						)}

						{/* Bio and skills */}
						<div className={`md:col-span-2 ${!profileSrc ? 'md:col-span-3' : ''}`}>
							<h2 className="text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">About Me</h2>
							<p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
								I'm a frontend engineer specializing in building accessible,
								responsive web applications using React and modern tooling.
								I enjoy turning designs into pixel-perfect UIs and solving
								real user problems.
							</p>
							<p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
								Currently focused on component-driven development, performance,
								and improving developer experience. I love experimenting with
								animations, design systems and small delightful interactions.
							</p>

							<div className="mb-4 sm:mb-6">
								<h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Key skills</h4>
								<div className="flex flex-wrap gap-2 sm:gap-3">
									{skills.map((s) => (
										<span key={s.name} className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-gradient-to-r ${s.color}`}>
											{s.name}
										</span>
									))}
								</div>
							</div>

							<div>
								<h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Highlights</h4>
								<ul className="list-disc pl-4 sm:pl-5 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
									<li>Built responsive production apps with React and Tailwind CSS.</li>
									<li>Improved performance and accessibility for multiple projects.</li>
								</ul>
							</div>
							<div className='flex justify-center md:justify-start mt-6 sm:mt-8'>
								<Link to="/home" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium px-3 py-2 bg-blue-200 rounded-md">Back</Link>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		);
};

export default About;
