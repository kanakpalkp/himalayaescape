import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full bg-white mt-20 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Contact Info */}
        <div className="bg-white shadow-lg rounded-xl p-6 space-y-6 border">
          <div className="flex items-start gap-3">
            <MapPin className="text-orange-500 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Address</h3>
              <p className="text-gray-600">chinyalisaur (Uttarkashi), Uttarakhand-246469</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="text-orange-500 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600">+91 7037211626</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="text-orange-500 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-orange-500">kanakpalpanwar26@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="text-orange-500 w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Business Hours</h3>
              <p className="text-gray-600">Mon - Sat: 10:00 AM - 06:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Send us a message</h2>
          <p className="text-gray-600 mb-6">
            Discover curated travel experiences across the majestic Himalayas. Whether you’re
            seeking thrilling treks, serene retreats, or cultural immersions, <span className="italic font-medium">HimalayanEscape</span> is your gateway to the extraordinary.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
