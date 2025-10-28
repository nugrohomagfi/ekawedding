import Link from "next/link";
import { Button } from "@/components/ui/button";import { Heart } from "lucide-react";


const WA_NUMBER = "6289659076932";
const waUrl = `https://wa.me/${WA_NUMBER}`;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-purple-700">
          <Heart className="h-5 w-5 fill-purple-600 text-purple-600" aria-hidden="true" />
          <span className="sr-only">Beranda</span>
          <span aria-label="BlessingsWO brand">BlessingsWO</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-purple-700">Layanan</a>
          <a href="#portfolio" className="hover:text-purple-700">Portofolio</a>
          <a href="#pricing" className="hover:text-purple-700">Paket</a>
          <a href="#faq" className="hover:text-purple-700">FAQ</a>
        </nav>
        <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
          <a href={waUrl} target="_blank" rel="noopener noreferrer">Hubungi Kami</a>
        </Button>
      </div>
    </header>
  );
}
