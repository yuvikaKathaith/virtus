import { useState } from 'react';
import { toast } from 'react-toastify';

export default function VolunteerForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    area: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.area || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    toast.success('Thank you for volunteering!');

    setForm({ name: '', email: '', area: '', message: '' });
  };

  return (
    <section id="volunteer" className="bg-[#ECECE2] text-[#002C5B] py-16 px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Become a Volunteer</h2>
        <p className="lg:text-sm text-sm  md:text-lg text-[#002C5B]">
          Your time and effort can transform lives. Join us in making a meaningful difference.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#041931] shadow-lg max-w-lg mx-auto p-8 text-[#edfca7] border-[#edfca7] space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-[#edfca7] bg-transparent rounded-md px-4 py-2 text-[#edfca7] focus:outline-none focus:ring-2 focus:ring-[#EDFCA7]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-[#edfca7] bg-transparent rounded-md px-4 py-2 text-[#edfca7] focus:outline-none focus:ring-2 focus:ring-[#EDFCA7]"
          />
        </div>

        {/* Area of Interest */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="area">
            Area of Interest
          </label>
          <select
            id="area"
            value={form.area}
            onChange={handleChange}
            className="w-full border border-[#edfca7] bg-[#041931] text-[#edfca7] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EDFCA7]"
          >
            <option value="" disabled>Select an option</option>
            <option className="bg-[#041931]">Child Education</option>
            <option className="bg-[#041931]">Health & Nutrition</option>
            <option className="bg-[#041931]">Women Empowerment</option>
            <option className="bg-[#041931]">Fundraising</option>
            <option className="bg-[#041931]">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Why do you want to volunteer?
          </label>
          <textarea
            id="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            placeholder="Share a few words..."
            className="w-full border border-[#edfca7] bg-transparent text-[#edfca7] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EDFCA7]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#edfca7] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#d9ec84] transition"
          >
            Submit Application
          </button>
        </div>
      </form>
    </section>
  );
}
