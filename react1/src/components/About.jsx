import React from 'react';

const About = () => {
  return (
    <section  id="about" className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-gray-600 text-lg">
            We are passionate about building modern web applications that solve real problems.
            Our team is dedicated to creating high-quality, user-friendly experiences that drive impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with scalable and efficient digital solutions that foster growth and innovation.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become a leading force in technology by delivering exceptional products and services that people love.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Values</h3>
            <p className="text-gray-600">
              Innovation, Integrity, Collaboration, and Customer Success are at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
