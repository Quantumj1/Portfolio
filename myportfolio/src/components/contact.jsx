import React, { useState } from 'react';
import bg from '../assets/bg.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  // Build mailto link to open user's email client
  const to = 'osafoparrypatrickjoseph@gmail.com';
  const subject = encodeURIComponent(`Website message from ${formData.name}`);
  const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
  const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
  window.location.href = mailto;
  // reset form after opening mail client
  setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen w-full overflow-hidden relative z-0" style={{ backgroundImage: `url(${bg})` }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-red-500 to-pink-500 
        bg-clip-text text-transparent drop-shadow-2xl leading-tight mb-8 sm:mb-12 mt-8 sm:mt-10 text-center">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-red-400 via-yellow-500 to-blue-500 
              bg-clip-text text-transparent drop-shadow-2xl leading-tight mb-3 sm:mb-4">Let's Connect</h3>
            <p className="text-yellow-600 mb-4 sm:mb-6 text-sm sm:text-base">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out if you'd like to work together or just say hello!
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 
                  bg-clip-text text-transparent drop-shadow-2xl leading-tight text-sm sm:text-base break-all">[osafoparrypatrickjoseph@gmail.com]</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 
                  bg-clip-text text-transparent drop-shadow-2xl leading-tight text-sm sm:text-base">[Tema, Ghana]</span>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-5 sm:p-8 rounded-lg shadow-md">
              <div className="mb-3 sm:mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                />
              </div>
              <div className="mb-3 sm:mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                />
              </div>
              <div className="mb-4 sm:mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 sm:py-3 px-4 rounded-md hover:bg-indigo-700 transition duration-300 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
