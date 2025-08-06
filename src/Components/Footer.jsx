import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#edfca7] text-[#002c5b] text-center py-10 px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">virtus</h1>

      {/* Subtitle */}
      <h2 className="text-2xl md:text-4xl font-semibold mb-3">Help for their beautiful future</h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-sm text-[#002c5b] mb-6">
        Your support is a beacon of hope for a brighter future. By contributing, you help build a foundation of opportunity
        and joy for those in need. Your generosity paves the way for a beautiful tomorrow.
      </p>

      {/* CTA */}
      <button className="bg-[#002c5b] text-white px-6 py-2 rounded-full mb-8 hover:bg-[#001a39] transition">
        Donate Now
      </button>

      {/* Navigation Links */}
      <nav className="mb-6 space-x-6 text-sm font-medium">
        <a href="#about">About</a>
        <a href="#">Agenda</a>
        <a href="#">Partners</a>
        <a href="#">Testimonials</a>
        <a href="#volunteer">Volunteer</a>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-4 mb-4">
        <a href="#" className="border border-[#002c5b] rounded-full p-2 hover:bg-[#002c5b] hover:text-white transition">
          <FaLinkedinIn />
        </a>
        <a href="#" className="border border-[#002c5b] rounded-full p-2 hover:bg-[#002c5b] hover:text-white transition">
          <FaFacebookF />
        </a>
        <a href="#" className="border border-[#002c5b] rounded-full p-2 hover:bg-[#002c5b] hover:text-white transition">
          <FaInstagram />
        </a>
        <a href="#" className="border border-[#002c5b] rounded-full p-2 hover:bg-[#002c5b] hover:text-white transition">
          <FaYoutube />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-[#002c5b]">
        © 2025 Virtus Non Profit Organization.
      </p>
    </footer>
  );
}
