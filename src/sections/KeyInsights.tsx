import { Shield, AlertTriangle, TrendingUp, ShieldAlert } from 'lucide-react';

const swotData = [
  {
    icon: Shield,
    title: 'Strengths',
    borderColor: '#8a9b5b',
    items: [
      'Strong fabric differentiation (Bamboo, Tencel, Sorona)',
      'Clear sustainability narrative',
      'Competitive pricing vs. premium minimal brands',
      'Versatile product range for everyday wear',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Weaknesses',
    borderColor: '#6b6b6b',
    items: [
      'Limited brand awareness vs. established players',
      'Narrow product breadth (opportunity to expand)',
      'No physical retail presence',
      'Supply chain dependency on specialized fabric mills',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Opportunities',
    borderColor: '#8a9b5b',
    items: [
      'Growing conscious consumer base in India',
      'Fabric innovation can create IP/patent opportunities',
      'B2B white-label potential for other brands',
      'Expansion into home textiles and accessories',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Threats',
    borderColor: '#6b6b6b',
    items: [
      'Greenwashing fatigue among consumers',
      'Established brands launching sustainable lines',
      'Raw material price volatility',
      'Economic downturn impacting discretionary spending',
    ],
  },
];

const recommendations = [
  {
    num: '01',
    title: 'Lead with Fabric Story',
    desc: "Create educational content around Bamboo, Tencel, and Sorona. Position Carbon Tree as the fabric expert in sustainable fashion. Consumers should associate the brand with material innovation first.",
  },
  {
    num: '02',
    title: 'Build a Loyalty Loop',
    desc: "Introduce a 'Fabric First' subscription — quarterly curated pieces at 15% off. Include fabric swatches and care guides. Turn one-time buyers into long-term community members.",
  },
  {
    num: '03',
    title: 'Expand Category by Category',
    desc: "Rather than broad expansion, deep-dive into one category at a time. Next: Soft tailoring (relaxed blazers, wide trousers). Then: Active-lounge hybrid. Each launch reinforces the fabric story.",
  },
  {
    num: '04',
    title: "Own the 'Accessible Conscious' Niche",
    desc: 'Price 40-60% below COS and 20-30% above Uniqlo. This gap represents the conscious but price-aware consumer — a growing, underserved segment in India.',
  },
];

export default function KeyInsights() {
  return (
    <section id="insights" className="bg-[#f5f5f5] py-20 lg:py-28 print-section-padding print-page-break">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-[640px] mx-auto reveal">
          <p className="eyebrow">06 — KEY INSIGHTS</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black tracking-[-0.02em]">
            SWOT Analysis & Strategic Recommendations
          </h2>
        </div>

        {/* SWOT Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {swotData.map((item, i) => (
            <div
              key={item.title}
              className={`bg-white rounded-xl p-8 reveal reveal-delay-${i + 1} print-avoid-break`}
              style={{ borderTop: `4px solid ${item.borderColor}` }}
            >
              <item.icon size={24} strokeWidth={1.5} style={{ color: item.borderColor }} />
              <h3 className="mt-3 text-lg font-semibold text-black">{item.title}</h3>
              <ul className="mt-4 space-y-2">
                {item.items.map((li) => (
                  <li key={li} className="text-sm text-[#6b6b6b] leading-relaxed">
                    • {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="mt-16 reveal">
          <h3 className="text-2xl font-semibold text-black mb-8">Strategic Recommendations</h3>
          <div className="space-y-4">
            {recommendations.map((rec, i) => (
              <div
                key={rec.num}
                className={`bg-white rounded-xl p-6 md:p-8 flex gap-6 items-start reveal reveal-delay-${i + 1} print-avoid-break`}
              >
                <span className="text-3xl md:text-4xl font-bold text-[#8a9b5b] min-w-[56px] shrink-0">
                  {rec.num}
                </span>
                <div>
                  <h4 className="text-base font-semibold text-black">{rec.title}</h4>
                  <p className="mt-2 text-sm text-[#6b6b6b] leading-relaxed">{rec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
