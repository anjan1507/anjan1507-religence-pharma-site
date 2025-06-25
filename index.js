import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const productRef = useRef(null);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const products = [
    ["Methylprednisolone", "83-43-2", "Anti-inflammatory and anti-allergic symptoms"],
    ["Budesonide", "51333-22-3", "Asthma"],
    ["Prednisolone Sodium Phosphate", "125-02-0", "Allergies, edema and lung diseases"]
  ];

  const scrollToProducts = () => {
    productRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-inter bg-no-repeat bg-cover bg-fixed text-gray-800" style={{ backgroundImage: "url('/LAB2.JPG')" }}>
      <header className="relative h-screen flex items-center justify-center bg-black/60">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">High-Quality API Manufacturing for a Healthier India</h1>
          <div className="space-x-4">
            <button onClick={scrollToProducts} className="bg-[#2d2daa] text-white px-6 py-2 rounded shadow hover:scale-105 transition">View Products</button>
            <button className="bg-white border border-[#2d2daa] text-[#2d2daa] px-6 py-2 rounded shadow hover:scale-105 transition">Contact Us</button>
          </div>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 bg-white/90 backdrop-blur">
        <section ref={productRef} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#2d2daa]">Our Products</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border">
              <thead className="bg-[#2d2daa] text-white">
                <tr><th className="py-2 px-4 border">API Name</th><th className="py-2 px-4 border">CAS No.</th><th className="py-2 px-4 border">Therapeutic Use</th></tr>
              </thead>
              <tbody>
                {products.map(([name, cas, use], i) => (
                  <tr key={i} className="even:bg-gray-100"><td className="py-2 px-4 border">{name}</td><td className="py-2 px-4 border">{cas}</td><td className="py-2 px-4 border">{use}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="bg-[#2d2daa] text-white text-center py-6">
        &copy; 2025 Religence Pharmaceuticals Pvt. Ltd. All rights reserved.
      </footer>
    </div>
  );
}
