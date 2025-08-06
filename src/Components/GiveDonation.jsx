import React from "react";
import donation1 from "../assets/images/donation1.jpg";
import donation2 from "../assets/images/support3.jpg";
import donation3 from "../assets/images/donation3.jpg";
import { FiArrowUpRight } from "react-icons/fi";

const missions = [
  {
    title: "Educate Every Child",
    supported: 2312,
    left: 1688,
    percent: 59,
    image: donation1
  },
  {
    title: "Empower Girl Education",
    supported: 3445,
    left: 555,
    percent: 87,
    image: donation2
  },
  {
    title: "Support Abandoned Children",
    supported: 2366,
    left: 2634,
    percent: 48,
    image: donation3
  },
];


export default function GiveMonthly() {
  return (
    <section id="donate" className=" px-4 md:px-16 py-16 text-[#002c5b]">
      <div className="bg-[#edfca7] p-8 md:p-12 rounded-3xl text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Most trusted <br className="md:hidden" />
          <span className="text-3xl md:text-4xl font-bold">
            Online Donation Platform
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-lg md:text-xl font-bold">
          <div>2.7M+ <p className="text-sm font-medium">Donations</p></div>
          <div>15M+ <p className="text-sm font-medium">Lives Impacted</p></div>
          <div>3000+ <p className="text-sm font-medium">Verified NGO’s</p></div>
          <div>300+ <p className="text-sm font-medium">Corporate Partners</p></div>
        </div>
      </div>

      <div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">Give Monthly</h2>
  <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600">
    At <strong>Virtus</strong>, your monthly donation can rewrite destinies.
    Whether it’s helping a child step into school for the first time, empowering girls with education,
    or caring for our forgotten elders — your support creates real, visible change in marginalized communities.
  </p>
</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {missions.map((mission, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <p className="font-semibold mb-2">Mission</p>
            <h3 className="text-xl font-bold mb-4">{mission.title}</h3>

            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-4">
              <img
                src={mission.image}
                alt={mission.title}
                className="object-cover w-full h-full grayscale"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full h-4 overflow-hidden">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: `linear-gradient(to right, #edfca7 ${mission.percent}%, #eee ${mission.percent}%)`,
                  }}
                ></div>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[#002c5b] bg-white px-2 py-1 text-xs font-bold rounded-full">
                {mission.percent}%
              </div>
            </div>

            <p className="text-sm font-semibold">
              {mission.supported.toLocaleString()} supported{" "}
              <span className="text-gray-500 font-normal">
                {mission.left.toLocaleString()} left
              </span>
            </p>

            <button className="mt-4 px-6 py-2 border border-[#002c5b] text-[#002c5b] hover:bg-[#002c5b] hover:text-white transition rounded-full text-sm font-medium">
              Donate Now
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="flex items-center justify-center gap-2 px-6 py-2 bg-[#002c5b] text-white hover:bg-[#001a39] rounded-full transition text-sm font-semibold mx-auto">
    View more <FiArrowUpRight className="text-lg" />
  </button>
      </div>
    </section>
  );
}
