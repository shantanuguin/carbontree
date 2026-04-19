import { Users, Layout, Globe } from 'lucide-react';

const pricingData = [
  {
    product: 'Waffle Oversized Tee',
    cost: 'Rs. 420',
    markup: '3.3x',
    mrp: 'Rs. 1,399',
    pos: 'Entry Core (High Volume)',
  },
  {
    product: 'Tencel Relaxed Shirt',
    cost: 'Rs. 780',
    markup: '3.6x',
    mrp: 'Rs. 2,799',
    pos: 'Premium Core (Style Driver)',
  },
  {
    product: 'Soft Utility Pants',
    cost: 'Rs. 850',
    markup: '3.4x',
    mrp: 'Rs. 2,899',
    pos: 'Volume Driver (Essentials)',
  },
  {
    product: 'Lightweight Overshirt',
    cost: 'Rs. 950',
    markup: '3.6x',
    mrp: 'Rs. 3,399',
    pos: 'Seasonal Hero (High Margin)',
  },
  {
    product: 'Co-ord Lounge Set',
    cost: 'Rs. 1,150',
    markup: '3.3x',
    mrp: 'Rs. 3,799',
    pos: 'Average Order Value (AOV) Booster',
  },
];

const postLaunchCards = [
  {
    icon: Users,
    title: 'Influencer Marketing',
    text: 'Partner with 8-10 micro-influencers (10K-50K followers) in the sustainable lifestyle space. Focus on "Fabric First" storytelling — showing the drape and texture of Tencel and Bamboo in natural light.',
  },
  {
    icon: Layout,
    title: 'Visual Merchandising',
    text: "Digital: High-fidelity macro fabric shots on PDPs. Physical: 'Fabric Lab' concept pop-ups in Tier-1 cities (Delhi, Mumbai, Bangalore) where customers can feel swatches and see the Sorona stretch recovery.",
  },
  {
    icon: Globe,
    title: 'Performance Marketing',
    text: 'Retargeting based on "Material Interest" — if a user views Bamboo, serve ads highlighting its antibacterial properties. Meta/Google ads focused on "Better Basics" as the core value prop.',
  },
];

export default function MerchandisingStrategy() {
  return (
    <section id="strategy" className="bg-[#f7f5f0] py-20 lg:py-28 print-section-padding print-page-break">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-[640px] mx-auto reveal">
          <p className="eyebrow">04 — MERCHANDISING STRATEGY</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black tracking-[-0.02em]">
            Pricing, Sales Logic & Post-Launch Plan
          </h2>
        </div>

        {/* A. Pricing Strategy */}
        <div className="mt-16 reveal">
          <h3 className="text-2xl font-semibold text-black mb-8">Pricing Strategy & Margin Analysis</h3>
          <div className="bg-white rounded-xl overflow-hidden border border-[#e5e5e5] print-avoid-break">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="text-left px-4 py-3 text-xs uppercase font-medium">Product Name</th>
                    <th className="text-left px-4 py-3 text-xs uppercase font-medium">Cost of Goods (BOM)</th>
                    <th className="text-left px-4 py-3 text-xs uppercase font-medium">Planned Markup</th>
                    <th className="text-left px-4 py-3 text-xs uppercase font-medium">Final MRP (INR)</th>
                    <th className="text-left px-4 py-3 text-xs uppercase font-medium">Strategic Positioning</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, i) => (
                    <tr
                      key={row.product}
                      className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#f7f5f0]'} hover:bg-[#f0f0f0] transition-colors`}
                    >
                      <td className="px-4 py-3.5 font-medium text-black">{row.product}</td>
                      <td className="px-4 py-3.5 text-[#6b6b6b]">{row.cost}</td>
                      <td className="px-4 py-3.5 text-[#6b6b6b]">{row.markup}</td>
                      <td className="px-4 py-3.5 font-semibold text-[#8a9b5b]">{row.mrp}</td>
                      <td className="px-4 py-3.5 text-[#6b6b6b]">{row.pos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-xs text-[#6b6b6b] italic">
            *BOM includes Fabric, CMT, Trims, and Tier-1 Logistics. Targeted average Gross Margin: 65-70%.
          </p>
        </div>

        {/* B. Sales Logic */}
        <div className="mt-16 reveal">
          <h3 className="text-2xl font-semibold text-black mb-8">Inventory Management & Assortment Planning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 print-avoid-break">
              <h4 className="text-lg font-semibold text-black mb-4">Launch & Velocity Strategy</h4>
              <div className="space-y-4 text-sm text-[#6b6b6b] leading-relaxed">
                <p>
                  <strong className="text-black">Drop Strategy:</strong> Hybrid model with 60% Core
                  (Always-in-stock) and 40% Seasonal drops to maintain freshness.
                </p>
                <div className="space-y-3">
                  <p>
                    <strong className="text-black">Phase 1 (Awareness):</strong> Use Waffle Tee as
                    "First Purchase" driver. Target CAC (Customer Acquisition Cost) &lt; Rs. 400.
                  </p>
                  <p>
                    <strong className="text-black">Phase 2 (Retention):</strong> Bundle Utility Pants
                    with Tencel Shirts for a 15% "Set Discount" to drive AOV.
                  </p>
                  <p>
                    <strong className="text-black">Inventory Turn:</strong> Target 4-5 turns per
                    annum. Maintain 8 weeks of cover for Core SKUs.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 print-avoid-break">
              <h4 className="text-lg font-semibold text-black mb-4">Stock Management Logic</h4>
              <div className="space-y-4 text-sm text-[#6b6b6b] leading-relaxed">
                <div className="pl-4 border-l-[3px] border-[#8a9b5b]">
                  <p className="font-medium text-[#8a9b5b] mb-1">REPLENISHMENT (Chase Strategy)</p>
                  <p>
                    Triggered at &gt;25% sell-through in first 14 days. Lead time for Tencel fabrics is
                    high (45 days), requiring proactive Greige stock holding.
                  </p>
                </div>
                <div className="pl-4 border-l-[3px] border-[#6b6b6b]">
                  <p className="font-medium text-[#6b6b6b] mb-1">DISCONTINUE (Phase Out)</p>
                  <p>
                    &lt;15% sell-through in 30 days. Action: Liquidate via bundle offers or
                    third-party marketplaces (Ajio Luxe/Nykaa Man) to protect brand equity.
                  </p>
                </div>
                <div className="pl-4 border-l-[3px] border-[#e5e5e5]">
                  <p className="font-medium text-black mb-1">MARGIN PROTECTION</p>
                  <p>
                    No flat site-wide sales. Use "Last Chance" sections for slow movers to maintain
                    perceived brand value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* C. Post-Launch Strategy */}
        <div className="mt-16 reveal">
          <h3 className="text-2xl font-semibold text-black mb-8">Post-Launch Marketing Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {postLaunchCards.map((card, i) => (
              <div
                key={card.title}
                className={`bg-white rounded-xl p-8 reveal reveal-delay-${i + 1} print-avoid-break`}
              >
                <card.icon size={28} strokeWidth={1.5} className="text-[#8a9b5b]" />
                <h4 className="mt-4 text-lg font-semibold text-black">{card.title}</h4>
                <p className="mt-3 text-sm text-[#6b6b6b] leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
