import React, { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus('error');
        console.error(result.error);
      }
    } catch (err) {
      setStatus('error');
      console.error('Error:', err);
    }
  };

  return (
    <section className="bg-white py-20" id="contact">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Have a question or want to work with us? Send us a message and we'll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 p-6 rounded-lg shadow space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {/* Feedback message */}
            {status === 'success' && (
              <p className="text-green-600 mt-4">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 mt-4">There was an error sending your message.</p>
            )}
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-blue-50 p-6 rounded-lg shadow space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600 mt-1">mlulekivelem@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600 mt-1">+27 (84) 048-9731</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Address</h3>
              <p className="text-gray-600 mt-1">
                123 Main Street, <br />
                Bezuidenhout,  johsnnesburg, ST 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
