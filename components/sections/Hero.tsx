"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const WA_NUMBER = "6289659076932"; // +62 896-5907-6932
const waUrl = `https://wa.me/${WA_NUMBER}`;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.purple.200),transparent_60%)] -z-10" />
      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 text-purple-700 px-3 py-1 text-sm font-medium">
            BlessingsWO • Wedding Organizer Jabodetabek
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-purple-900">
            Wujudkan Hari Pernikahan Impian Anda, Tanpa Ribet
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-prose">
            Tim profesional BlessingsWO siap mendampingi setiap langkah: dari
            perencanaan hingga hari-H. Fokus menikmati momen, biar kami yang
            urus semua detailnya.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis via WhatsApp
              </a>
            </Button>
            <Button variant="outline" asChild size="lg" className="border-purple-300 text-purple-700">
              <a href="#cta">Lihat Paket & Booking Tanggal</a>
            </Button>
          </div>
          <ul className="mt-6 text-sm text-muted-foreground grid grid-cols-2 gap-2 max-w-md">
            <li>• Tim berpengalaman di Jabodetabek</li>
            <li>• Vendor terpercaya & terkurasi</li>
            <li>• Timeline rapi & detail checklist</li>
            <li>• Hemat waktu & hemat tenaga</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-purple-200 bg-purple-50">
          <Image
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop"
            alt="BlessingsWO - Wedding Organizer"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
