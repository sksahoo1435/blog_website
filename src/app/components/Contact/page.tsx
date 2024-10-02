"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
  };

  return (
    <div className="flex items-center justify-center p-5">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-lg w-full text-center border">
        <h1 className="text-3xl font-bold text-gray-700 mb-5">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-800" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-800" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md  border p-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-800" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-black to-gray-600 text-white py-2 px-4 rounded-md shadow hover:bg-gradient-to-r hover:from-gray-700 hover:to-black text-white transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {error && <p className="text-red-500 mt-3">{error}</p>}
          {success && <p className="text-green-500 mt-3">Message sent successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
