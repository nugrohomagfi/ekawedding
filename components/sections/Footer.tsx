export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-6 py-8 text-sm text-muted-foreground">
        <p className="font-medium text-gray-700">
          Alamat Kantor
        </p>
        <p className="mt-1">
          Komplek Kunciran Mas Permai, Jl. Jeruk No. 4, Kec. Pinang, Kota Tangerang 15144
        </p>
        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} EkaWedding • Wedding Organizer Jabodetabek. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
