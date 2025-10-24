import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WA_NUMBER = "6289659076932";
const waUrl = `https://wa.me/${WA_NUMBER}`;

const services = [
  { title: "Full Wedding Organizer", desc: "Pendampingan lengkap dari A-Z, termasuk koordinasi vendor dan pengelolaan hari-H."},
  { title: "Day-of Coordinator", desc: "Khusus hari-H agar acara berjalan rapi sesuai rundown dan tanpa hambatan."},
  { title: "Intimate Wedding", desc: "Konsep hangat dan personal untuk pernikahan kecil yang berkesan."},
  { title: "Engagement & Akad", desc: "Penataan acara tunangan/akad yang khidmat, rapi, dan tepat waktu."},
];

export function Services() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900">Layanan Kami</h2>
          <p className="text-muted-foreground mt-2 max-w-prose">Pilih paket sesuai kebutuhan Anda. Kami fleksibel menyesuaikan konsep, budaya, dan budget.</p>
        </div>
        <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
          <a href={waUrl} target="_blank" rel="noopener noreferrer">Diskusikan Paket</a>
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="border-purple-100 hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-purple-800">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
