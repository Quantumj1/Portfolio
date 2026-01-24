
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

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
			{ name: 'TypeScript', color: 'from-indigo-500 to-purple-500' },
			{ name: 'Vite', color: 'from-green-400 to-emerald-500' },
		];

		return (
			<div className="min-h-screen py-16 px-4 bg-gradient-to-br from-indigo-50 via-white to-pink-50">
				<div className="max-w-5xl mx-auto">
					<div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
						{/* Profile column */}
						{profileSrc && (
							<div className="md:col-span-1 flex flex-col items-center md:items-start">
								<div className="rounded-full p-1 bg-gradient-to-tr from-indigo-400 via-pink-400 to-yellow-300">
									<img
										src={profileSrc}
										alt="Profile"
										className="w-44 h-44 rounded-full object-cover block shadow-2xl border-4 border-white"
									/>
								</div>
								<h3 className="mt-6 text-2xl font-semibold text-gray-800">Hello, I'm Patrick Joseph Osafo-Parry</h3>
								<p className="text-sm text-gray-600 mt-2">Frontend Engineer · UI/UX enthusiast</p>
																<div className="mt-6 flex gap-3">
																	<a href="mailto:osafoparrypatrickjoseph@gmail.com" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 transition">Contact</a>
																	<Link to="/resume" className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-md shadow-sm hover:shadow-md transition">Resume</Link>
																</div>
							</div>
						)}

						{/* Bio and skills */}
						<div className={`md:col-span-2 ${!profileSrc ? 'md:col-span-3' : ''}`}>
							<h2 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">About Me</h2>
							<p className="text-gray-700 mb-4">
								I'm a frontend engineer specializing in building accessible,
								responsive web applications using React and modern tooling.
								I enjoy turning designs into pixel-perfect UIs and solving
								real user problems.
							</p>
							<p className="text-gray-700 mb-6">
								Currently focused on component-driven development, performance,
								and improving developer experience. I love experimenting with
								animations, design systems and small delightful interactions.
							</p>

							<div className="mb-6">
								<h4 className="text-lg font-semibold text-gray-800 mb-3">Key skills</h4>
								<div className="flex flex-wrap gap-3">
									{skills.map((s) => (
										<span key={s.name} className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${s.color}`}>
											{s.name}
										</span>
									))}
								</div>
							</div>

							<div>
								<h4 className="text-lg font-semibold text-gray-800 mb-3">Highlights</h4>
								<ul className="list-disc pl-5 text-gray-700 space-y-2">
									<li>Built responsive production apps with React and Tailwind CSS.</li>
									<li>Improved performance and accessibility for multiple projects.</li>
									<li>Designed and implemented reusable component libraries.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default About;
