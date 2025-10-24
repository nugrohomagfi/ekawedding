import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WA_NUMBER = "6289659076932";
const waUrl = `https://wa.me/${WA_NUMBER}`;

const packages = [
  { name: "Starter", price: "Mulai 6 Jt", features: ["Koordinator Hari-H", "Rundown & Briefing", "2 LO Keluarga"], popular: false },
  { name: "Signature", price: "Mulai 12 Jt", features: ["Full WO A-Z", "Koordinasi Vendor", "Tim Lengkap"], popular: true },
  { name: "Intimate", price: "Mulai 8 Jt", features: ["WO Intimate 50-150 pax", "MC & Pengarah Acara", "Dokumentasi Dasar"], popular: false },
];

export function Pricing() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-900">Paket Populer</h2>
      <p className="text-muted-foreground mt-2">Harga menyesuaikan kebutuhan & detail acara. Hubungi kami untuk estimasi akurat.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {packages.map((p) => (
          <Card key={p.name} className={`border-purple-100 ${p.popular ? 'ring-2 ring-purple-300' : ''}`}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-purple-800">
                {p.name}
                {p.popular && <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Terfavorit</span>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-900">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {p.features.map((f) => (<li key={f}>• {f}</li>))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                <a href={waUrl} target="_blank" rel="noopener noreferrer">Konsultasi Paket</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
