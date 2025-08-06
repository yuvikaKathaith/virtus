import footerBg from "../assets/images/bg-footer.jpg";

export function ScrollThanks() {
  return (
    <section
      className="w-full min-h-[300px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#989f77cc] via-[#000000c7] to-[#000000ef]"></div>

      <div className="relative z-10 w-full min-h-[300px] flex flex-col md:flex-row justify-between items-center text-center md:text-left px-6 md:px-16 py-12">
        {/* Left Heading */}
        <div className="w-full md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
            Thanks for <span className="text-[#edfca7]">scrolling</span> along
          </h2>
        </div>

        {/* Right Logo Text */}
        <div className="text-white">
          <p className="text-[#edfca7] font-bold text-3xl sm:text-4xl">Virtus</p>
        </div>
      </div>
    </section>
  );
}
