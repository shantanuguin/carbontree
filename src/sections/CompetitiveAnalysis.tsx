import { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from 'chart.js';
import { Bar, Radar, Bubble } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

const competitors = [
  { brand: 'Uniqlo', price: 'Rs. 799-4,999', fabrics: 'Cotton, Linen, Blend', sustain: 'Moderate', breadth: 'Very High', aesthetic: 'Minimal Functional' },
  { brand: 'Zara', price: 'Rs. 1,299-8,999', fabrics: 'Mixed (Poly-heavy)', sustain: 'Low', breadth: 'Very High', aesthetic: 'Trend-Driven Fast' },
  { brand: 'H&M', price: 'Rs. 699-4,999', fabrics: 'Mixed', sustain: 'Low-Medium', breadth: 'Very High', aesthetic: 'Mass Fashion' },
  { brand: 'Fear of God', price: 'Rs. 8,000-25,000', fabrics: 'Cotton, Fleece', sustain: 'Low', breadth: 'Low', aesthetic: 'Elevated Street' },
  { brand: 'Jaywalking', price: 'Rs. 2,499-6,999', fabrics: 'Cotton, Hemp', sustain: 'High', breadth: 'Medium', aesthetic: 'Indian Minimal' },
  { brand: 'Nicobar', price: 'Rs. 1,499-5,999', fabrics: 'Cotton, Linen', sustain: 'Medium', breadth: 'Medium', aesthetic: 'Indian Contemporary' },
  { brand: 'COS', price: 'Rs. 4,999-18,999', fabrics: 'Wool, Silk, Cotton', sustain: 'Medium', breadth: 'High', aesthetic: 'Architectural Minimal' },
];

// Bar Chart Data
const barData = {
  labels: ['Uniqlo', 'Zara', 'H&M', 'FOG', 'Jaywalking', 'Nicobar', 'COS', 'Carbon Tree'],
  datasets: [
    {
      label: 'Avg Price (INR)',
      data: [2899, 5149, 2849, 16500, 4749, 3749, 11999, 1449],
      backgroundColor: ['#e5e5e5', '#e5e5e5', '#e5e5e5', '#e5e5e5', '#e5e5e5', '#e5e5e5', '#e5e5e5', '#8a9b5b'],
      borderRadius: 6,
      barThickness: 32,
    },
  ],
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#fff',
      titleColor: '#000',
      bodyColor: '#6b6b6b',
      borderColor: '#e5e5e5',
      borderWidth: 1,
      padding: 12,
      titleFont: { family: 'Inter', size: 13, weight: 'bold' as const },
      bodyFont: { family: 'Inter', size: 12 },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 18000,
      grid: { color: '#f5f5f5' },
      ticks: {
        font: { family: 'Inter', size: 11 },
        color: '#6b6b6b',
        callback: (value: string | number) => `Rs. ${Number(value).toLocaleString()}`,
      },
    },
    x: {
      grid: { display: false },
      ticks: { font: { family: 'Inter', size: 11 }, color: '#6b6b6b' },
    },
  },
};

// Radar Chart Data — all brands individually
const brandColors = [
  { border: '#3b82f6', bg: 'rgba(59,130,246,0.10)' },   // Uniqlo - blue
  { border: '#ef4444', bg: 'rgba(239,68,68,0.08)' },     // Zara - red
  { border: '#f59e0b', bg: 'rgba(245,158,11,0.08)' },    // H&M - amber
  { border: '#1e1e1e', bg: 'rgba(30,30,30,0.06)' },      // FOG - black
  { border: '#10b981', bg: 'rgba(16,185,129,0.08)' },    // Jaywalking - emerald
  { border: '#8b5cf6', bg: 'rgba(139,92,246,0.08)' },    // Nicobar - violet
  { border: '#ec4899', bg: 'rgba(236,72,153,0.08)' },    // COS - pink
  { border: '#8a9b5b', bg: 'rgba(138,155,91,0.18)' },    // Carbon Tree - green
];

const radarBrands = [
  { label: 'Uniqlo',       data: [90, 85, 70, 60, 50, 30] },
  { label: 'Zara',         data: [85, 80, 65, 55, 45, 10] },
  { label: 'H&M',          data: [80, 75, 55, 50, 40, 25] },
  { label: 'Fear of God',  data: [50, 40, 60, 30, 35, 0] },
  { label: 'Jaywalking',   data: [60, 45, 30, 20, 0, 10] },
  { label: 'Nicobar',      data: [65, 50, 35, 40, 10, 25] },
  { label: 'COS',          data: [80, 70, 65, 45, 25, 20] },
  { label: 'Carbon Tree',  data: [85, 70, 40, 10, 0, 15] },
];

const radarData = {
  labels: ['Tops', 'Bottoms', 'Outerwear', 'Accessories', 'Footwear', 'Home'],
  datasets: radarBrands.map((brand, i) => ({
    label: brand.label,
    data: brand.data,
    borderColor: brandColors[i].border,
    backgroundColor: brand.label === 'Carbon Tree' ? brandColors[i].bg : 'transparent',
    pointBackgroundColor: brandColors[i].border,
    pointBorderColor: brandColors[i].border,
    borderWidth: brand.label === 'Carbon Tree' ? 2.5 : 1.5,
    pointRadius: brand.label === 'Carbon Tree' ? 4 : 2,
    borderDash: brand.label === 'Carbon Tree' ? [] : [4, 3] as number[],
  })),
};

const radarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: { font: { family: 'Inter', size: 10 }, padding: 12, boxWidth: 14 },
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      max: 100,
      grid: { color: '#f0f0f0' },
      pointLabels: { font: { family: 'Inter', size: 11 }, color: '#6b6b6b' },
      ticks: { display: false },
    },
  },
};

// Bubble Chart Data — each brand as its own dataset
const bubbleBrands = [
  { label: 'Uniqlo',       data: [{ x: 60, y: 50, r: 12 }] },
  { label: 'Zara',         data: [{ x: 50, y: 20, r: 13 }] },
  { label: 'H&M',          data: [{ x: 40, y: 30, r: 13 }] },
  { label: 'Fear of God',  data: [{ x: 95, y: 15, r: 9 }] },
  { label: 'Jaywalking',   data: [{ x: 55, y: 75, r: 10 }] },
  { label: 'Nicobar',      data: [{ x: 50, y: 55, r: 10 }] },
  { label: 'COS',          data: [{ x: 90, y: 55, r: 11 }] },
  { label: 'Carbon Tree',  data: [{ x: 35, y: 90, r: 16 }] },
];

const bubbleData = {
  datasets: bubbleBrands.map((brand, i) => ({
    label: brand.label,
    data: brand.data,
    backgroundColor: brand.label === 'Carbon Tree'
      ? 'rgba(138, 155, 91, 0.65)'
      : brandColors[i].bg.replace(/[\d.]+\)$/, '0.5)'),
    borderColor: brandColors[i].border,
    borderWidth: brand.label === 'Carbon Tree' ? 2.5 : 1.5,
  })),
};

const bubbleOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: { font: { family: 'Inter', size: 10 }, padding: 12, boxWidth: 14 },
    },
    tooltip: {
      backgroundColor: '#fff',
      titleColor: '#000',
      bodyColor: '#6b6b6b',
      borderColor: '#e5e5e5',
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      title: { display: true, text: 'Price Point (Low \u2192 High)', font: { family: 'Inter', size: 12 }, color: '#6b6b6b' },
      min: 0,
      max: 100,
      grid: { color: '#f5f5f5' },
      ticks: { display: false },
    },
    y: {
      title: { display: true, text: 'Sustainability Score (Low \u2192 High)', font: { family: 'Inter', size: 12 }, color: '#6b6b6b' },
      min: 0,
      max: 100,
      grid: { color: '#f5f5f5' },
      ticks: { display: false },
    },
  },
};

export default function CompetitiveAnalysis() {
  const chartsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="analysis" className="bg-white py-20 lg:py-28 print-section-padding print-page-break">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-[640px] mx-auto reveal">
          <p className="eyebrow">05 — COMPETITIVE ANALYSIS</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black tracking-[-0.02em]">
            Brand Landscape & Positioning
          </h2>
          <p className="mt-4 text-base text-[#6b6b6b] leading-relaxed">
            A comparative analysis of 7 key competitors across pricing, product diversity,
            sustainability claims, and brand positioning.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 reveal">
          <div className="rounded-xl overflow-hidden border border-[#e5e5e5] print-avoid-break">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="text-left px-3 py-3 text-xs uppercase font-medium">Brand</th>
                    <th className="text-left px-3 py-3 text-xs uppercase font-medium">Price Range</th>
                    <th className="text-left px-3 py-3 text-xs uppercase font-medium">Fabrics</th>
                    <th className="text-left px-3 py-3 text-xs uppercase font-medium">Sustainability</th>
                    <th className="text-left px-3 py-3 text-xs uppercase font-medium">Breadth</th>
                    <th className="text-left px-3 py-3 text-xs uppercase font-medium">Aesthetic</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((c, i) => (
                    <tr
                      key={c.brand}
                      className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#f5f5f5]'} hover:bg-[#f0f0f0] transition-colors`}
                    >
                      <td className="px-3 py-3 font-medium text-black">{c.brand}</td>
                      <td className="px-3 py-3 text-[#6b6b6b]">{c.price}</td>
                      <td className="px-3 py-3 text-[#6b6b6b]">{c.fabrics}</td>
                      <td className="px-3 py-3 text-[#6b6b6b]">{c.sustain}</td>
                      <td className="px-3 py-3 text-[#6b6b6b]">{c.breadth}</td>
                      <td className="px-3 py-3 text-[#6b6b6b]">{c.aesthetic}</td>
                    </tr>
                  ))}
                  {/* Carbon Tree row */}
                  <tr className="bg-[rgba(138,155,91,0.08)] border-l-[3px] border-[#8a9b5b]">
                    <td className="px-3 py-3 font-bold text-[#8a9b5b]">Carbon Tree</td>
                    <td className="px-3 py-3 font-medium text-[#8a9b5b]">Rs. 899-1,999</td>
                    <td className="px-3 py-3 font-medium text-[#8a9b5b]">Bamboo, Tencel, Sorona</td>
                    <td className="px-3 py-3 font-medium text-[#8a9b5b]">Very High</td>
                    <td className="px-3 py-3 font-medium text-[#8a9b5b]">Low-Medium</td>
                    <td className="px-3 py-3 font-medium text-[#8a9b5b]">Fabric-Led Minimal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Charts — always rendered so they appear in print */}
        <div ref={chartsRef} className="mt-16 space-y-12">
          {/* Bar + Radar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="reveal print-avoid-break">
              <h4 className="text-lg font-semibold text-black mb-4">Average Price Comparison (INR)</h4>
              <div className="h-[350px] md:h-[400px]">
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
            <div className="reveal reveal-delay-1 print-avoid-break">
              <h4 className="text-lg font-semibold text-black mb-4">Product Diversity Score</h4>
              <div className="h-[350px] md:h-[400px]">
                <Radar data={radarData} options={radarOptions} />
              </div>
            </div>
          </div>

          {/* Positioning Matrix */}
          <div className="reveal print-avoid-break">
            <h4 className="text-lg font-semibold text-black mb-4">Brand Positioning Matrix</h4>
            <div className="h-[400px] md:h-[450px]">
              <Bubble data={bubbleData} options={bubbleOptions} />
            </div>
            <div className="mt-4 flex justify-between text-xs text-[#6b6b6b]">
              <span>Low Price</span>
              <span>High Price</span>
            </div>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mt-16 reveal">
          <h3 className="text-2xl font-semibold text-black mb-8">Key Learnings for Carbon Tree</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f5f5f5] rounded-xl p-6 md:p-8 print-avoid-break">
              <h4 className="text-lg font-semibold text-black mb-3">What Competitors Do Well</h4>
              <div className="space-y-3 text-sm text-[#6b6b6b] leading-relaxed">
                <p><strong className="text-black">Uniqlo</strong> — Exceptional at fabric storytelling (HeatTech, AIRism) and scaling essentials globally. Their "LifeWear" narrative makes basics feel intentional.</p>
                <p><strong className="text-black">COS</strong> — Masters architectural minimalism with premium fabric quality. Their curation creates aspiration without excess.</p>
                <p><strong className="text-black">Nicobar</strong> — Successfully blends Indian identity with contemporary design. Strong visual merchandising and lifestyle branding.</p>
              </div>
            </div>
            <div className="bg-[#f5f5f5] rounded-xl p-6 md:p-8 print-avoid-break">
              <h4 className="text-lg font-semibold text-black mb-3">What Carbon Tree Can Do Differently</h4>
              <div className="space-y-3 text-sm text-[#6b6b6b] leading-relaxed">
                <p><strong className="text-black">Own the fabric narrative</strong> — No competitor at Carbon Tree's price point leads with material innovation as the core brand story. This is an unoccupied niche.</p>
                <p><strong className="text-black">Educate, don't just sell</strong> — Create content around why Bamboo outperforms cotton, how Tencel is made, and what makes Sorona stretch better. Turn product pages into learning experiences.</p>
                <p><strong className="text-black">Price as a moat</strong> — At Rs. 1,399–3,799, Carbon Tree can capture the gap between Uniqlo's core basics and Nicobar's premium positioning — serving the conscious but quality-aware Indian consumer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
