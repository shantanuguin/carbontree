import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Brand', href: '#brand' },
  { label: 'Trends', href: '#trends' },
  { label: 'Collection', href: '#collection' },
  { label: 'Strategy', href: '#strategy' },
  { label: 'Analysis', href: '#analysis' },
  { label: 'Insights', href: '#insights' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 64;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 no-print ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-[#e8e4de] shadow-sm'
            : 'bg-[#f7f5f0]/80 backdrop-blur-md'
        }`}
      >
        <div className="section-container flex items-center justify-between w-full">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2"
          >
            {/* Leaf icon mark */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#8a9b5b]">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.5 4.5 8.3C7.5 17 9.5 14 12 12c2.5 2 4.5 5 5.5 8.3C20.2 18.5 22 15.5 22 12 22 6.5 17.5 2 12 2z" fill="currentColor" opacity="0.2"/>
              <path d="M12 2v20M7 8c1.5 1.5 3.5 2.5 5 4M17 8c-1.5 1.5-3.5 2.5-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-base font-bold tracking-[0.08em] text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
              CARBON TREE
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-200 pb-1 border-b-2 ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#8a9b5b] border-[#8a9b5b]'
                    : 'text-[#6b6b6b] border-transparent hover:text-black hover:border-[#e8e4de]'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#f7f5f0] flex flex-col items-center justify-center gap-8 md:hidden no-print">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-2xl text-black"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
