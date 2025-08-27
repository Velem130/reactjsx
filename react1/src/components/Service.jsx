import React from 'react';

const Service = () => {
  return (
    <section  id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-gray-600 text-lg">
            We offer a wide range of services to help your business grow and succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center">
            <div className="text-blue-600 text-4xl mb-4">
              💻
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Web Development</h3>
            <p className="text-gray-600">
              Custom websites and web apps built with modern technologies for performance and scalability.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center">
            <div className="text-green-600 text-4xl mb-4">
              📱
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Mobile Apps</h3>
            <p className="text-gray-600">
              Intuitive and responsive mobile applications for iOS and Android platforms.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center">
            <div className="text-purple-600 text-4xl mb-4">
              ⚙️
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Beautiful, user-centered designs that enhance the user experience and increase engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
