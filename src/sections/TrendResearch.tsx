const trends = [
  {
    tag: 'Trend 01',
    title: 'Textured Minimalism',
    description:
      'Moving beyond flat basics, textured minimalism introduces tactile depth through waffle knits, ribbed weaves, and dimensional fabrics. The trend celebrates the beauty of materiality within restrained silhouettes — where the fabric itself becomes the statement.',
    relevance:
      "Carbon Tree's waffle-knit program and ribbed bamboo textiles directly serve this trend. The brand's fabric-first approach positions it as a natural leader in textured essentials.",
    brands: 'Key References: COS, Lemaire, Studio Nicholson',
    images: [
      '/images/6_Sculptural_Neutrals_The_Fusion_of.png',
      '/images/1_Closeup_Beige_Ribbed_Knit_Fabric.png',
      '/images/3_Ribbed_Knit_Flare_Mini_Dress_in_Warm.png',
    ],
    reverse: false,
  },
  {
    tag: 'Trend 02',
    title: 'Soft Utility',
    description:
      'The hard edges of traditional cargo and military-inspired utility are softening. Relaxed fits, draped fabrics, and muted palettes transform functional pieces into everyday staples. Pockets become design details; structure yields to comfort.',
    relevance:
      "Carbon Tree's relaxed utility pant and soft overshirt collection merge function with the brand's signature fabric comfort — ideal for the softened utility consumer.",
    brands: 'Key References: Everlane, A Day\'s March, Uniqlo U',
    images: [
      '/images/3_Utility_Fashion_SheerLuxe.png',
      '/images/3_Men_s_Vintage_Relaxed_Straight_Fit.png',
      '/images/2_The_Utility_Pant_in_Buttersoft_Sage.png',
    ],
    reverse: true,
  },
  {
    tag: 'Trend 03',
    title: 'Relaxed Tailoring',
    description:
      "The oversized blazer and loose trousers trend continues its dominance, but with a shift toward even more relaxed proportions and softer constructions. Deconstructed shoulders, unlined bodies, and breathable fabrics redefine 'dressed up' for the modern consumer.",
    relevance:
      "Carbon Tree's Tencel relaxed shirt and upcoming soft blazer concept align with the casualization of tailoring, offering breathable alternatives to traditional wool suiting.",
    brands: 'Key References: The Row, Frankie Shop, COS',
    images: [
      '/images/2_21_Best_Oversized_Blazers_for_Women.png',
      '/images/4_24_Blazer_Styles_That_Will_Dominate.png',
      '/images/5_21_Best_Oversized_Blazers_for_Women.png',
    ],
    reverse: false,
  },
];

export default function TrendResearch() {
  return (
    <section id="trends" className="bg-[#f5f5f5] py-20 lg:py-28 print-section-padding print-page-break">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-[640px] mx-auto reveal">
          <p className="eyebrow">02 — TREND RESEARCH</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black tracking-[-0.02em]">
            Three Macro Trends Shaping 2025
          </h2>
          <p className="mt-4 text-base text-[#6b6b6b] leading-relaxed max-w-[560px] mx-auto">
            An analysis of emerging fashion movements and their strategic relevance to Carbon
            Tree's product direction.
          </p>
        </div>

        {/* Trend Blocks */}
        <div className="mt-16 space-y-12">
          {trends.map((trend, idx) => (
            <div
              key={trend.tag}
              className={`bg-white rounded-xl p-6 md:p-10 lg:p-12 print-avoid-break reveal reveal-delay-${idx + 1}`}
            >
              <div
                className={`flex flex-col ${
                  trend.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-8 lg:gap-12`}
              >
                {/* Text */}
                <div className="flex-1 lg:max-w-[45%]">
                  <span className="inline-block text-[11px] uppercase bg-[#f5f5f5] px-3 py-1 rounded font-medium text-[#6b6b6b]">
                    {trend.tag}
                  </span>
                  <h3 className="mt-4 text-2xl md:text-[28px] font-semibold text-black">
                    {trend.title}
                  </h3>
                  <p className="mt-4 text-[15px] text-[#6b6b6b] leading-relaxed">
                    {trend.description}
                  </p>
                  <div className="mt-5 pl-4 border-l-[3px] border-[#8a9b5b]">
                    <p className="text-sm font-medium text-[#8a9b5b] leading-relaxed">
                      {trend.relevance}
                    </p>
                  </div>
                  <p className="mt-4 text-xs text-[#6b6b6b]">{trend.brands}</p>
                </div>

                {/* Images */}
                <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {trend.images.map((img, imgIdx) => (
                    <div key={imgIdx} className="rounded-lg overflow-hidden">
                      <img
                        src={img}
                        alt={`${trend.title} reference ${imgIdx + 1}`}
                        className="w-full h-full object-cover min-h-[160px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
