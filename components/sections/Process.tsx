const steps = [
  { t: "Konsultasi", d: "Cerita kebutuhan & konsep impian Anda."},
  { t: "Perencanaan", d: "Susun timeline, budget, dan shortlist vendor."},
  { t: "Persiapan", d: "Briefing menyeluruh & koordinasi vendor."},
  { t: "Hari-H", d: "Eksekusi rapi sesuai rundown. Anda tinggal menikmati."},
];

export function Process() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-900">Proses Kerja</h2>
      <div className="grid md:grid-cols-4 gap-6 mt-6">
        {steps.map((s, i) => (
          <div key={s.t} className="p-5 rounded-xl ring-1 ring-purple-100 bg-purple-50">
            <div className="text-sm text-purple-700">Langkah {i+1}</div>
            <div className="font-semibold text-purple-900 mt-1">{s.t}</div>
            <p className="text-sm text-muted-foreground mt-2">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
