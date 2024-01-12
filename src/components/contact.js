import React, { useState } from 'react';
import pinkDev from '../assets/bg.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (Object.values(formData).some((value) => value.trim() === '')) {
      console.log('Please fill in all fields');
      return;
    }
  
    console.log('Form submitted:', formData);
  
  };

  return (
    <div id='contact' className='h-screen bg-cover flex justify-end items-center ' style={{ backgroundImage: `url(${pinkDev})` }}>
      <div className="pr-16 w-1/3 text-amber-900">
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl text-text-brown font-semibold mb-6">Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-bold mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-baigan text-white py-2 px-4 rounded-md hover:bg-purple-400">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
