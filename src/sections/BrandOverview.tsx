import { Leaf, Beaker, Heart } from 'lucide-react';

const brandValues = [
  {
    icon: Leaf,
    title: 'Sustainability',
    text: 'Committed to reducing environmental impact through responsible sourcing, ethical production, and transparent supply chains. Every decision considers its ecological footprint.',
  },
  {
    icon: Beaker,
    title: 'Fabric Innovation',
    text: "Pioneering the use of next-generation sustainable fabrics — Bamboo for breathability, Tencel for silk-like drape, and Sorona for stretch recovery. Science meets style.",
  },
  {
    icon: Heart,
    title: 'Conscious Living',
    text: 'Designing for longevity, not landfill. Versatile pieces that transcend seasons, encouraging mindful consumption and a deeper connection with what we wear.',
  },
];

const fabrics = [
  {
    name: 'Bamboo',
    image: './images/5_BAMBOO_Eco_friendly_clothes_made.png',
    desc: 'Naturally antibacterial, incredibly soft, and highly breathable. Requires 1/3 less water than cotton.',
  },
  {
    name: 'Tencel',
    image: './images/9_Eco_friendly_fashion_5_bamboo_fabrics.png',
    desc: 'Botanical silk derived from wood pulp. Superior moisture management and a luxurious hand feel.',
  },
  {
    name: 'Sorona',
    image: './images/6_Elevate_Your_Wardrobe_with_Bamboo.png',
    desc: '37% plant-based polymer offering exceptional stretch recovery and permanent wrinkle resistance.',
  },
];

export default function BrandOverview() {
  return (
    <section id="brand" className="py-20 lg:py-28 print-section-padding print-page-break" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f7f5f0 100%)' }}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-[640px] mx-auto reveal">
          <p className="eyebrow">01 — BRAND OVERVIEW</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black tracking-[-0.02em]">
            Fabric-Led Sustainable Fashion
          </h2>
          <p className="mt-4 text-base text-[#6b6b6b] leading-relaxed">
            Carbon Tree is a conscious fashion brand rooted in fabric innovation and
            sustainable living. The brand creates everyday essentials using nature-derived
            materials that prioritize comfort, durability, and environmental responsibility.
          </p>
        </div>

        {/* Brand Value Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {brandValues.map((item, i) => (
            <div
              key={item.title}
              className={`card-base reveal reveal-delay-${i + 1}`}
            >
              <item.icon size={32} strokeWidth={1.5} className="text-[#8a9b5b]" />
              <h3 className="mt-5 text-xl font-semibold text-black">{item.title}</h3>
              <p className="mt-3 text-sm text-[#6b6b6b] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Fabric Focus */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {fabrics.map((fabric, i) => (
            <div key={fabric.name} className={`reveal reveal-delay-${i + 1} bg-[#f2ede6] rounded-xl p-6`}>
              <div className="rounded-lg overflow-hidden h-40">
                <img
                  src={fabric.image}
                  alt={`${fabric.name} fabric texture`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="mt-4 text-base font-semibold text-black">{fabric.name}</h4>
              <p className="mt-1 text-[13px] text-[#6b6b6b] leading-relaxed">{fabric.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
