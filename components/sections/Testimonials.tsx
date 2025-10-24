import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Rani & Arif", text: "Tim EkaWedding bener-bener ngebantu dari awal sampai akhir. Kami bisa nikmatin hari itu tanpa pusing!" },
  { name: "Sinta & Dimas", text: "Rapi, komunikatif, dan sangat sabar. Vendor yang direkomendasikan juga top semua." },
  { name: "Lia & Rizky", text: "Terima kasih sudah wujudin intimate wedding kami jadi super hangat dan berkesan." },
];

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900">Apa Kata Pasangan</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-purple-100">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">“{t.text}”</p>
                <p className="mt-4 font-semibold text-purple-800">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
