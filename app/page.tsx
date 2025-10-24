import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Calendar, Heart, Sparkles, Star, Users, Camera, Music, Flower } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                EkaWedding
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-purple-600 transition-colors">Beranda</a>
              <a href="#layanan" className="text-gray-700 hover:text-purple-600 transition-colors">Layanan</a>
              <a href="#paket" className="text-gray-700 hover:text-purple-600 transition-colors">Paket</a>
              <a href="#galeri" className="text-gray-700 hover:text-purple-600 transition-colors">Galeri</a>
              <a href="#kontak" className="text-gray-700 hover:text-purple-600 transition-colors">Kontak</a>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800">
                <Sparkles className="w-4 h-4 mr-1" />
                Wedding Organizer Jabodetabek
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Wujudkan Pernikahan <span className="text-purple-600">Impian Anda</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                EkaWedding hadir untuk membantu mewujudkan pernikahan sempurna Anda. 
                Dari konsep hingga eksekusi, kami selalu siap membantu.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  Konsultasi Gratis
                </Button>
                <Button size="lg" variant="outline">
                  Lihat Portofolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Wedding decoration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600">
              Komprehensif dan profesional untuk pernikahan Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Perencanaan Pernikahan</CardTitle>
                <CardDescription>
                  Konsep, timeline, dan koordinasi lengkap untuk hari special Anda
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Flower className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Dekorasi & Bunga</CardTitle>
                <CardDescription>
                  Desain dekorasi indah dan rangkaian bunga segar yang memukau
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Dokumentasi</CardTitle>
                <CardDescription>
                  Fotografi dan videografi profesional untuk abadikan momen berharga
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Music className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Hiburan & Musik</CardTitle>
                <CardDescription>
                  Band, DJ, dan entertainment untuk meriahkan acara Anda
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>MC & Koordinator</CardTitle>
                <CardDescription>
                  Master of ceremony dan tim koordinator berpengalaman
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Vendor Management</CardTitle>
                <CardDescription>
                  Koordinasi semua vendor untuk acara yang seamless
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="paket" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Paket Pernikahan
            </h2>
            <p className="text-xl text-gray-600">
              Pilihan paket yang sesuai dengan kebutuhan dan budget Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Silver</CardTitle>
                <div className="text-3xl font-bold text-purple-600">
                  Rp 25 Juta
                </div>
                <CardDescription>
                  Untuk 300-400 tamu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Dekorasi standar
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Fotografi 1 tim
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    MC profesional
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Sound system standar
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="relative border-2 border-purple-600">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-600 text-white px-4 py-1">
                  Paling Populer
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Gold</CardTitle>
                <div className="text-3xl font-bold text-purple-600">
                  Rp 45 Juta
                </div>
                <CardDescription>
                  Untuk 500-600 tamu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Dekorasi premium
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Fotografi & videografi
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Live band acoustic
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Lighting design
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Platinum</CardTitle>
                <div className="text-3xl font-bold text-purple-600">
                  Rp 75 Juta
                </div>
                <CardDescription>
                  Untuk 700+ tamu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Dekorasi mewah custom
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Dokumentasi lengkap
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Full entertainment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    Wedding planner full service
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Galeri Pernikahan
            </h2>
            <p className="text-xl text-gray-600">
              Momem-momen indah yang telah kami wujudkan
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Wedding ceremony"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Wedding decoration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Wedding couple"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Wedding flowers"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Wedding reception"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Mari wujudkan pernikahan impian Anda bersama kami
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-gray-600">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@ekawedding.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-gray-600">
                      Jl. Wedding No. 123, Jakarta Selatan
                      DKI Jakarta 12345
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Jam Operasional</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Senin - Jumat: 09:00 - 18:00</p>
                  <p>Sabtu: 09:00 - 15:00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi form di bawah untuk konsultasi gratis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tanggal Pernikahan</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    rows={4}
                    placeholder="Ceritakan tentang pernikahan impian Anda..."
                  ></textarea>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Kirim Pesan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold">EkaWedding</span>
              </div>
              <p className="text-gray-400">
                Wedding organizer profesional untuk pernikahan impian Anda di Jabodetabek.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Perencanaan Pernikahan</li>
                <li>Dekorasi & Bunga</li>
                <li>Fotografi & Video</li>
                <li>Hiburan</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tentang Kami</li>
                <li>Portofolio</li>
                <li>Testimoni</li>
                <li>Karir</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <span className="text-sm">IG</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <span className="text-sm">FB</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <span className="text-sm">TW</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EkaWedding. All rights reserved. | Wedding Organizer Jabodetabek</p>
          </div>
        </div>
      </footer>
    </div>
  )
}