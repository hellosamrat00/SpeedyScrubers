export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-center lg:flex-row lg:items-center overflow-hidden pt-28 pb-12 lg:pt-40 lg:pb-24"
      style={{ backgroundColor: "var(--color-brand-light)" }}
    >
      {/* Decorative Background Elements */}
      {/* The massive dark blue pill shape sliding in from the right / bottom */}
      <div 
        className="absolute top-48 lg:top-20 bottom-0 lg:bottom-20 right-0 w-full lg:w-[80%] rounded-t-[50px] lg:rounded-t-none lg:rounded-l-[150px] shadow-2xl z-0"
        style={{ backgroundColor: "var(--color-brand-blue)" }}
      />
      {/* A subtle yellow accent glow behind the image */}
      <div 
        className="absolute top-32 left-10 w-64 h-64 rounded-full blur-3xl opacity-50 z-0"
        style={{ backgroundColor: "var(--color-brand-yellow)" }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        
        {/* Left Side: Image overlapping the bubble */}
        <div className="w-full lg:w-5/12 flex flex-col relative z-20">
          <div className="relative w-[90%] mx-auto sm:w-[80%] lg:w-full aspect-square lg:aspect-[3/4] lg:-mr-24 xl:-mr-32">
            <img 
              src="/cleaning-team.jpg" 
              alt="Cleaning Team" 
              className="w-full h-full object-cover rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-[10px] border-white"
            />
            
            {/* Creative floating badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-12 bg-white px-6 py-4 rounded-3xl shadow-xl flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{ backgroundColor: "var(--color-brand-yellow)", color: "var(--color-brand-blue-dark)" }}
              >
                ✓
              </div>
              <div>
                <p className="font-heading font-bold text-lg leading-tight" style={{ color: "var(--color-brand-blue-dark)" }}>Spotless</p>
                <p className="text-sm font-semibold" style={{ color: "var(--color-brand-blue)", opacity: 0.7 }}>Guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Big Typography inside the blue shape */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center lg:pl-32 xl:pl-40 lg:py-20 text-center lg:text-left z-10">
          
          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-8 text-white drop-shadow-lg mt-8 lg:mt-0">
            Spotless <br/>
            Spaces, <br/>
            <span style={{ color: "var(--color-brand-yellow)" }}>Zero Stress.</span>
          </h1>

          {/* Subheading & CTA */}
          <div className="relative mt-6 lg:mt-8">
            <p className="text-lg lg:text-2xl text-white/90 font-medium leading-relaxed mb-10 max-w-2xl">
              Experience top-tier professional cleaning services. From deep cleans to daily upkeep, our reliable team ensures a spotless environment every single time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center font-heading text-xl font-bold px-10 py-5 hover:-translate-y-1 transition-transform shadow-xl"
                style={{
                  backgroundColor: "var(--color-brand-yellow)",
                  color: "var(--color-brand-blue-dark)",
                  borderRadius: "20px"
                }}
              >
                GET A FREE QUOTE
                <svg className="ml-3 w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              
              <div className="text-center sm:text-left flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/10 text-white shadow-lg">
                  📞
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold mb-1 text-white/60">Contact Us</p>
                  <p className="font-bold text-xl text-white">+61 485 678 471</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
