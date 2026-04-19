import { Users, Layout, Globe } from 'lucide-react';

const pricingData = [
  { product: 'Waffle Oversized Tee', cost: 'Rs. 280', markup: '3.2x', mrp: 'Rs. 899', pos: 'Entry Core' },
  { product: 'Tencel Relaxed Shirt', cost: 'Rs. 520', markup: '3.5x', mrp: 'Rs. 1,799', pos: 'Premium Core' },
  { product: 'Soft Utility Pants', cost: 'Rs. 450', markup: '3.1x', mrp: 'Rs. 1,399', pos: 'Volume Driver' },
  { product: 'Lightweight Overshirt', cost: 'Rs. 580', markup: '3.4x', mrp: 'Rs. 1,999', pos: 'Seasonal Premium' },
  { product: 'Co-ord Lounge Set', cost: 'Rs. 620', markup: '3.0x', mrp: 'Rs. 1,899', pos: 'Bundle Value' },
];

const postLaunchCards = [
  {
    icon: Users,
    title: 'Influencer Marketing',
    text: "Partner with 8-10 micro-influencers (10K-50K followers) in the sustainable lifestyle space. Focus on authenticity — long-term ambassadorships over one-off posts. Provide seeding kits with full product story cards.",
  },
  {
    icon: Layout,
    title: 'Visual Merchandising',
    text: "In-store: Create 'Touch & Feel' zones with fabric swatch displays. Online: 360-degree product views with fabric close-up hotspots. Use neutral linen backdrops to reinforce brand aesthetic.",
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    text: "Email: Segmented campaigns targeting fabric enthusiasts. Social: Weekly 'Fabric Friday' educational content. Retargeting: Dynamic ads showcasing products based on browsing behavior.",
  },
];

export default function MerchandisingStrategy() {
  return (
    <section id="strategy" className="bg-[#f5f5f5] py-20 lg:py-28 print-section-padding print-page-break">
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
          <h3 className="text-2xl font-semibold text-black mb-8">Pricing Strategy</h3>
          <div className="bg-white rounded-xl overflow-hidden border border-[#e5e5e5] print-avoid-break">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="text-left px-4 py-3 text-xs uppercase font-medium">Product</th>
                    <th className="text-left px-4 py-3 text-xs uppercase font-medium">Fabric Cost</th>
                    <th className="text-left px-4 py-3 text-xs uppercase font-medium">Markup</th>
                    <th className="text-left px-4 py-3 text-xs uppercase font-medium">MRP (INR)</th>
                    <th className="text-left px-4 py-3 text-xs uppercase font-medium">Positioning</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, i) => (
                    <tr
                      key={row.product}
                      className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#f5f5f5]'} hover:bg-[#f0f0f0] transition-colors`}
                    >
                      <td className="px-4 py-3.5 font-medium text-black">{row.product}</td>
                      <td className="px-4 py-3.5 text-[#6b6b6b]">{row.cost}</td>
                      <td className="px-4 py-3.5 text-[#6b6b6b]">{row.markup}</td>
                      <td className="px-4 py-3.5 font-medium text-[#8a9b5b]">{row.mrp}</td>
                      <td className="px-4 py-3.5 text-[#6b6b6b]">{row.pos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* B. Sales Logic */}
        <div className="mt-16 reveal">
          <h3 className="text-2xl font-semibold text-black mb-8">Sales Logic & Assortment Planning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 print-avoid-break">
              <h4 className="text-lg font-semibold text-black mb-4">Sell-Through Strategy</h4>
              <div className="space-y-3 text-sm text-[#6b6b6b] leading-relaxed">
                <p><strong className="text-black">Week 1-2 (Launch):</strong> Focus on Waffle Tee and Co-ord Set as entry points. Drive traffic through influencer seeding.</p>
                <p><strong className="text-black">Week 3-4 (Conversion):</strong> Push Tencel Shirt as the premium upgrade. Highlight fabric story through content.</p>
                <p><strong className="text-black">Week 5-6 (Retention):</strong> Introduce Overshirt as the seasonal layer. Bundle with Utility Pants for full looks.</p>
                <p><strong className="text-black">Week 7-8 (Replenishment):</strong> Re-stock top 2 SKUs based on sell-through data. Discontinue slowest mover.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 print-avoid-break">
              <h4 className="text-lg font-semibold text-black mb-4">Restock vs. Discontinue Logic</h4>
              <div className="space-y-4 text-sm text-[#6b6b6b] leading-relaxed">
                <div className="pl-4 border-l-[3px] border-[#8a9b5b]">
                  <p className="font-medium text-[#8a9b5b] mb-1">RESTOCK Criteria</p>
                  <p>&gt;70% sell-through in 4 weeks. Strong social engagement. Repeat customer demand.</p>
                </div>
                <div className="pl-4 border-l-[3px] border-[#6b6b6b]">
                  <p className="font-medium text-[#6b6b6b] mb-1">DISCONTINUE Criteria</p>
                  <p>&lt;30% sell-through in 6 weeks. Negative return rate &gt;15%. Poor colorway performance.</p>
                </div>
                <div className="pl-4 border-l-[3px] border-[#e5e5e5]">
                  <p className="font-medium text-black mb-1">CLEARANCE</p>
                  <p>Markdown at 30% after Week 8 for discontinued SKUs. Channel to outlet partners.</p>
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
