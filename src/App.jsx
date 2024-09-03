import "./App.css";
import Annoucement from "./components/Annoucement";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Annoucement />
      <Home />
      <About />
      <Service />
      <section>
        <div className="mx-auto max-w-max px-6 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-48">
          <div className="text-center pb-12">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              <span className="text-gray-900">
                <span className="text-primary">Syarat </span> & ketentuan
              </span>
            </h2>
          </div>
          <ul className="w-full">
            <li className="w-full border-b-2 border-secondary border-opacity-100 py-4">Pembayaran dilakukan dua tahap: 50% di muka saat proyek dimulai dan sisanya setelah proyek selesai.</li>
            <li className="w-full border-b-2 border-secondary border-opacity-100 py-4">Harga sudah termasuk domain dan hosting untuk 1 tahun.</li>
            <li className="w-full border-b-2 border-secondary border-opacity-100 py-4">Perpanjangan domain dan hosting tahun berikutnya sebesar Rp300.000. Harga dapat berubah sewaktu-waktu.</li>
            <li className="w-full border-b-2 border-secondary border-opacity-100 py-4">Jika Anda sudah memiliki domain dan hosting, akan ada potongan harga sebesar Rp150.000.</li>
            <li className="w-full border-b-2 border-secondary border-opacity-100 py-4">Konten website tidak boleh mengandung unsur yang melanggar hukum seperti pornografi, perjudian, atau money game.</li>
            <li className="w-full border-b-2 border-secondary border-opacity-100 py-4">Website dibangun secara custom menggunakan script program sehingga dapat disesuaikan dengan kebutuhan Anda.</li>
            <li className="w-full border-b-2 border-secondary border-opacity-100 py-4">Waktu pengerjaan dapat bervariasi tergantung kompleksitas proyek.</li>
            <li className="w-full border-b-2 border-secondary border-opacity-100 py-4">Kami menyediakan backup data internal, namun Anda disarankan untuk melakukan backup secara mandiri.</li>
            <li className="w-full py-4">Dengan memesan jasa kami, Anda setuju dengan semua syarat dan ketentuan yang berlaku.</li>
          </ul>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
