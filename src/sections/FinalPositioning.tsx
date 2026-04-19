export default function FinalPositioning() {
  return (
    <section className="py-24 lg:py-32 print-section-padding print-page-break" style={{ background: 'linear-gradient(180deg, #f7f5f0 0%, #ede9e0 100%)' }}>
      <div className="section-container">
        <div className="max-w-[800px] mx-auto text-center reveal">
          {/* Leaf icon */}
          <div className="flex justify-center mb-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#8a9b5b]">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.5 4.5 8.3C7.5 17 9.5 14 12 12c2.5 2 4.5 5 5.5 8.3C20.2 18.5 22 15.5 22 12 22 6.5 17.5 2 12 2z" fill="currentColor" opacity="0.15"/>
              <path d="M12 2v20M7 8c1.5 1.5 3.5 2.5 5 4M17 8c-1.5 1.5-3.5 2.5-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-[28px] font-normal text-black leading-relaxed italic">
            "Carbon Tree is the fabric-led sustainable essentials brand for the conscious
            Indian consumer — offering premium material innovation at an approachable premium, one
            thoughtful layer at a time."
          </blockquote>

          {/* Decorative line */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-[#8a9b5b]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#8a9b5b]" style={{ fontFamily: 'Inter, sans-serif' }}>Final Positioning</span>
            <div className="w-12 h-[1px] bg-[#8a9b5b]" />
          </div>
        </div>
      </div>
    </section>
  );
}
