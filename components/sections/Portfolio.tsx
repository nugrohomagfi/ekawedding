import Image from "next/image";

const gallery = [
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
];

export function Portfolio() {
  return (
    <section className="bg-purple-50/50">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900">Portofolio</h2>
        <p className="text-muted-foreground mt-2">Beberapa momen yang pernah kami bantu wujudkan.</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-purple-100">
              <Image src={src} alt={`BlessingsWO Gallery ${i+1}`} fill className="object-cover hover:scale-105 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
