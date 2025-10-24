"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const WA_NUMBER = "6289659076932"; // +62 896-5907-6932

export function CTA() {
  const [date, setDate] = useState<Date | undefined>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tanggal = date ? format(date, "dd MMMM yyyy") : "(belum memilih)";
    const text = `Halo EkaWedding!\nNama: ${name}\nNo HP: ${phone}\nTanggal: ${tanggal}\nCatatan: ${note}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="cta" className="bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900">Siap Diskusi & Cek Tanggal?</h2>
          <p className="text-muted-foreground mt-2">Isi formulir singkat di bawah. Kami akan respons cepat via WhatsApp.</p>
        </div>

        <form onSubmit={onSubmit} className="max-w-2xl mx-auto mt-8 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Nama Lengkap" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input placeholder="No. HP (WhatsApp)" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <button type="button" className="flex w-full items-center justify-between rounded-md border border-purple-200 bg-white px-3 py-2 text-left text-sm text-foreground shadow-sm hover:bg-purple-50">
                  <span>{date ? format(date, "dd MMMM yyyy") : "Pilih Tanggal Acara"}</span>
                  <CalendarIcon className="h-4 w-4 text-purple-600" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
            <Input placeholder="Lokasi (Kota/Area)" />
          </div>

          <Textarea placeholder="Catatan atau konsep impian Anda" value={note} onChange={(e) => setNote(e.target.value)} />

          <Button type="submit" className="h-12 text-base bg-purple-600 hover:bg-purple-700 text-white">Kirim via WhatsApp</Button>

          <div className="text-center">
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-sm text-purple-700 underline">Atau chat langsung WhatsApp</a>
          </div>
        </form>
      </div>
    </section>
  );
}
