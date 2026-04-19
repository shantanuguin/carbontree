import { useEffect, useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.classList.add('animate-fade-up');
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center pt-16 print-visible"
      style={{ opacity: 0, background: 'linear-gradient(180deg, #f7f5f0 0%, #ffffff 100%)' }}
    >
      <div className="section-container w-full py-12 md:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column — Text */}
          <div className="flex-1 max-w-xl">
            <p className="eyebrow mb-6">NIFT NEW DELHI — 2026</p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-[-0.02em] text-black">
              Carbon Tree
              <br />
              <span className="text-[#8a9b5b] italic">Merchandising Strategy</span>
            </h1>

            <p className="mt-6 text-lg text-[#6b6b6b] leading-relaxed max-w-[520px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Carbon Tree is a conscious fashion brand rooted in fabric innovation —
              crafting everyday essentials from Bamboo, Tencel, and Sorona. Designed for
              the modern, mindful consumer who values comfort, quality, and environmental
              responsibility without compromising on style.
            </p>

            {/* Decorative leaf accent */}
            <div className="mt-8 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#8a9b5b]" />
              <span className="text-xs tracking-[0.15em] uppercase text-[#8a9b5b]">Fabric-Led Fashion</span>
              <div className="flex-1 h-[1px] bg-[#e8e4de]" />
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span>Student: Shantanu Guin</span>
              <span className="hidden sm:inline text-[#e5e5e5]">|</span>
              <span>Roll: BFT/22/107</span>
              <span className="hidden sm:inline text-[#e5e5e5]">|</span>
              <span>Role: Assistant Merchandiser</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 no-print">
              <a
                href="#brand"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('brand')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-block bg-[#8a9b5b] text-white text-sm font-medium px-7 py-3.5 rounded-lg hover:bg-[#7a8b4b] transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                View Assignment
              </a>
              <button
                onClick={() => window.print()}
                className="inline-block bg-transparent border border-[#e5e5e5] text-black text-sm font-medium px-7 py-3.5 rounded-lg hover:bg-[#f7f5f0] transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Print PDF
              </button>
            </div>
          </div>

          {/* Right Column — Image */}
          <div className="flex-1 w-full hero-image-print">
            <div className="rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <img
                src="/images/hero.jpg"
                alt="Carbon Tree fashion editorial — model in oversized cream knit sweater"
                className="w-full h-auto object-cover max-h-[70vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
