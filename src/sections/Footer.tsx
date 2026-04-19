export default function Footer() {
  return (
    <footer className="bg-[#1a1a18] py-16 print-section-padding">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#8a9b5b]">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.5 4.5 8.3C7.5 17 9.5 14 12 12c2.5 2 4.5 5 5.5 8.3C20.2 18.5 22 15.5 22 12 22 6.5 17.5 2 12 2z" fill="currentColor" opacity="0.3"/>
                <path d="M12 2v20M7 8c1.5 1.5 3.5 2.5 5 4M17 8c-1.5 1.5-3.5 2.5-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-base font-bold tracking-[0.08em] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                CARBON TREE
              </span>
            </div>
            <p className="text-[13px] text-[#8a8a80] leading-relaxed max-w-[360px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Fabric-led sustainable fashion for the conscious Indian consumer.
            </p>
          </div>

          {/* Assignment Info */}
          <div className="text-right" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p className="text-[13px] text-[#8a8a80]">
              Merchandising Strategy Assignment
            </p>
            <p className="text-[13px] text-[#8a8a80]">
              NIFT New Delhi, 2026
            </p>
            <p className="mt-2 text-[13px] text-white font-medium">
              Shantanu Guin — BFT/22/107
            </p>
          </div>
        </div>

        <div className="my-8 border-t border-[#333330]" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          <p className="text-[11px] text-[#6b6b60] leading-relaxed">
            This assignment was created for educational purposes. All images are used under fair
            use for academic analysis.
          </p>
          <p className="text-[11px] text-[#6b6b60]">
            Bamboo · Tencel · Sorona
          </p>
        </div>
      </div>
    </footer>
  );
}
