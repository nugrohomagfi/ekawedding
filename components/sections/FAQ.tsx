import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-900">Pertanyaan Umum</h2>
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Apakah bisa menyesuaikan dengan adat tertentu?</AccordionTrigger>
          <AccordionContent>Ya, tim kami berpengalaman menangani berbagai adat & budaya. Kami akan diskusikan detailnya.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Apakah ada survei lokasi terlebih dahulu?</AccordionTrigger>
          <AccordionContent>Tentu. Kami lakukan venue visit dan menyusun layout agar alur acara nyaman.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Bagaimana cara booking tanggal?</AccordionTrigger>
          <AccordionContent>Pilih tanggal di formulir CTA di bawah, atau chat kami via WhatsApp untuk cek ketersediaan.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
