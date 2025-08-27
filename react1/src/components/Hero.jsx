import React from 'react';
import velemImage from '../assets/velem.jpg';

const Hero = () => {
  return (
    <section id="home" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Build Better Web Experiences
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Empower your users with responsive, fast, and modern design. Start your journey with us today.
          </p>
          <a
            href="https://wa.me/27840489731"  // Your WhatsApp number
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 rounded-[50%] ">
          <img 
            src={velemImage}
            alt="Hero Illustration"
            className="w-[50%] h-[20%] rounded-[100%] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

