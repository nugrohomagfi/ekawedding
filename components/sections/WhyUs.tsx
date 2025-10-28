import { CheckCircle2 } from "lucide-react";

const points = [
  { title: "Berpengalaman", desc: "Ratusan acara di Jabodetabek dengan berbagai konsep & budaya." },
  { title: "Tim Solid", desc: "Koordinator, PIC, dan LO yang rapi, komunikatif, dan sigap." },
  { title: "Vendor Terkurasi", desc: "Rekomendasi vendor tepercaya sesuai gaya & budget Anda." },
  { title: "Transparan", desc: "Semua biaya jelas, tanpa biaya tersembunyi." },
];

export function WhyUs() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-900">Kenapa Pilih BlessingsWO?</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {points.map((p) => (
          <div key={p.title} className="flex gap-4 items-start p-4 rounded-xl ring-1 ring-purple-100 bg-white">
            <CheckCircle2 className="text-purple-600 mt-1" />
            <div>
              <h3 className="font-semibold text-purple-800">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
