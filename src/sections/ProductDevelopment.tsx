const products = [
  {
    name: 'Waffle Oversized Tee',
    fabric: 'Bamboo-Cotton Blend',
    image: '/images/5_0946_Waffle_Knit_Oversized_Tee_Crea.png',
    features: [
      'Oversized drop-shoulder fit',
      'Waffle-knit texture',
      'Natural breathability',
      'Garment-washed softness',
    ],
    role: 'Volume Driver',
  },
  {
    name: 'Tencel Relaxed Shirt',
    fabric: '100% Tencel Lyocell',
    image: '/images/8_Tencel_Oversized_Shirts_Etsy.png',
    features: [
      'Camp collar silhouette',
      'Mother-of-pearl buttons',
      'Superior drape',
      'Moisture-wicking',
    ],
    role: 'Premium Signature',
  },
  {
    name: 'Soft Utility Pants',
    fabric: 'Tencel-Cotton Twill',
    image: '/images/6_The_Utility_Pant_in_Buttersoft_Sage.png',
    features: [
      'Relaxed tapered fit',
      'Elasticated waistband',
      'Side cargo pockets',
      'Garment-dyed finish',
    ],
    role: 'Volume Driver',
  },
  {
    name: 'Lightweight Overshirt',
    fabric: 'Sorona-Nylon Blend',
    image: '/images/3_How_to_Style_an_Overshirt_Men_ICON.png',
    features: [
      'Shirt-jacket hybrid',
      'Concealed snap buttons',
      'Water-resistant finish',
      'Packable design',
    ],
    role: 'Seasonal Hero',
  },
  {
    name: 'Co-ord Lounge Set',
    fabric: 'Bamboo-Viscose Jersey',
    image: '/images/4_Loungewear_Co_Ords_Co_Ord_Lounge.png',
    features: [
      'Matching top and bottom',
      'Ribbed cuffs and hem',
      'Four-way stretch',
      'Home-to-street versatile',
    ],
    role: 'Core Essential',
  },
];

const colorPalette = [
  { name: 'Oatmeal', hex: '#E8DFD0' },
  { name: 'Sage', hex: '#9CAF94' },
  { name: 'Sand', hex: '#C4B49A' },
  { name: 'Olive', hex: '#7A6B4E' },
  { name: 'Charcoal', hex: '#3A3A3A' },
];

export default function ProductDevelopment() {
  return (
    <section id="collection" className="bg-white py-20 lg:py-28 print-section-padding print-page-break">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-[640px] mx-auto reveal">
          <p className="eyebrow">03 — PRODUCT DEVELOPMENT</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-black tracking-[-0.02em]">
            Earthform — Everyday Layers
          </h2>
          <p className="mt-4 text-base text-[#6b6b6b] leading-relaxed">
            A curated mini-drop of five essential pieces built around Carbon Tree's core
            fabric philosophy. Designed for versatility, comfort, and conscious living.
          </p>
        </div>

        {/* Moodboard */}
        <div className="mt-12 reveal">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/images/moodboard.jpg"
              alt="Earthform Collection Moodboard"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
          <p className="mt-3 text-xs text-[#6b6b6b] text-center">
            Earthform Collection Moodboard — Neutral palette, natural textures, everyday versatility
          </p>
        </div>

        {/* Color Palette */}
        <div className="mt-12 reveal">
          <h3 className="text-xl font-semibold text-black text-center">Color Palette</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            {colorPalette.map((color) => (
              <div key={color.name} className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-full border border-[#e5e5e5]"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="mt-2 text-xs font-medium text-[#6b6b6b]">{color.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`bg-[#f5f5f5] rounded-xl overflow-hidden reveal reveal-delay-${i + 1}`}
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-base font-semibold text-black">{product.name}</h4>
                <p className="text-[13px] text-[#8a9b5b] mt-1">{product.fabric}</p>
                <div className="my-3 border-t border-[#e5e5e5]" />
                <ul className="space-y-1">
                  {product.features.map((f) => (
                    <li key={f} className="text-xs text-[#6b6b6b] leading-relaxed">
                      • {f}
                    </li>
                  ))}
                </ul>
                <span className="mt-3 inline-block text-[11px] uppercase bg-white px-2.5 py-1 rounded border border-[#e5e5e5] text-[#6b6b6b]">
                  {product.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Why This Drop Would Sell */}
        <div className="mt-16 reveal">
          <h3 className="text-2xl font-semibold text-black mb-6">Why This Drop Would Sell</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f5f5f5] rounded-xl p-6 print-avoid-break">
              <h4 className="text-base font-semibold text-black mb-2">Fabric Differentiation</h4>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                No Indian D2C brand at this price point leads with Bamboo, Tencel, and Sorona.
                The "Earthform" drop creates a unique selling proposition centered on material
                innovation — consumers feel and remember the difference.
              </p>
            </div>
            <div className="bg-[#f5f5f5] rounded-xl p-6 print-avoid-break">
              <h4 className="text-base font-semibold text-black mb-2">Trend-Aligned Versatility</h4>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Every piece directly serves the three macro trends identified — textured
                minimalism, soft utility, and relaxed tailoring. The collection is not
                trend-chasing; it is trend-meeting through fabric.
              </p>
            </div>
            <div className="bg-[#f5f5f5] rounded-xl p-6 print-avoid-break">
              <h4 className="text-base font-semibold text-black mb-2">Premium Conscious Pricing</h4>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                Priced at Rs. 1,399–3,799, the collection sits in a strategic sweet spot — premium
                enough to signal quality and innovation, yet more accessible than Rs. 5,000+ conscious luxury brands.
              </p>
            </div>
            <div className="bg-[#f5f5f5] rounded-xl p-6 print-avoid-break">
              <h4 className="text-base font-semibold text-black mb-2">Built-in Repeat Purchase</h4>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                The Co-ord Set and Waffle Tee serve as entry-level hooks, while the Tencel
                Shirt and Overshirt drive premium upsell. The collection is designed as a
                wardrobe system — buy one, want more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
