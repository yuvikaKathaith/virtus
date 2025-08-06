import children1 from "../assets/images/bg-footer.jpg";
import children2 from "../assets/images/support1.jpg";
import { FaHandsHelping, FaLock, FaSmile, FaBrain, FaRecycle, FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";

export default function AgendaSection(){
  return (
    <section id="agenda" className="bg-[#100f0f] rounded-lg text-white px-6 md:px-16 py-16 space-y-20">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Objective</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-[#edfca7] rounded-xl p-6 flex gap-4 items-start bg-[#1a1a1a]">
            <FaHandsHelping size={24} className="text-[#edfca7] mt-1" />
            <p>Create an engaging and emotional digital experience that moves users to take action.</p>
          </div>
          <div className="border border-[#edfca7] rounded-xl p-6 flex gap-4 items-start bg-[#1a1a1a]">
            <FaLock size={24} className="text-[#edfca7] mt-1" />
            <p>Ensure ease of donation with a simple, intuitive, and seamless process.</p>
          </div>
          <div className="border border-[#edfca7] rounded-xl p-6 flex gap-4 items-start bg-[#1a1a1a]">
            <FaSmile size={24} className="text-[#edfca7] mt-1" />
            <p>Build a sense of trust and transparency by showcasing real impact stories.</p>
          </div>
          <div className="border border-[#edfca7] rounded-xl p-6 flex gap-4 items-start bg-[#1a1a1a]">
            <FaBrain size={24} className="text-[#edfca7] mt-1" />
            <p>Use design psychology to make generosity feel rewarding.</p>
          </div>
          <div className="border border-[#edfca7] rounded-xl p-6 flex gap-4 items-start bg-[#1a1a1a]">
            <FaRecycle size={24} className="text-[#edfca7] mt-1" />
            <p>Encourage sustained support through recurring donations and campaigns.</p>
          </div>
          <div className="border border-[#edfca7] rounded-xl p-6 flex gap-4 items-start bg-[#1a1a1a]">
            <FaBookOpen size={24} className="text-[#edfca7] mt-1" />
            <p>Promote access to quality education for underprivileged children in urban slums and rural areas.</p>
          </div>
          <div className="border border-[#edfca7] rounded-xl p-6 flex gap-4 items-start bg-[#1a1a1a]">
            <FaChalkboardTeacher size={24} className="text-[#edfca7] mt-1" />
            <p>Support volunteer-driven teaching initiatives that empower children through learning.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Vision</h2>
        <p className="text-gray-300 leading-relaxed mb-10">
          Millions of people around the world require assistance, yet the biggest challenge is not just fundraising—
          it’s fostering a meaningful connection between <strong>donors and beneficiaries</strong>. This project was an opportunity
          to bridge that gap through design. I wanted to create a platform that doesn’t just facilitate donations but also tells 
          compelling human stories, making generosity a natural and fulfilling action.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[300px]">
          <img src={children1} alt="Happy children" className="rounded-lg object-cover w-full max-h-[300px]" />
          <img src={children2} alt="Smiling kids" className="rounded-lg object-cover w-full max-h-[300px]" />
        </div>
      </div>

    </section>
  );
}
