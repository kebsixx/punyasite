export default function Home() {
  return (
    <section id="home" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Website impian Anda,
            <strong className="font-extrabold text-red-700 sm:block"> Mulai dari nol. </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">Dengan harga yang terjangkau, Anda bisa mendapatkan website yang berkualitas.</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 px-2 sm:px-0">
            <a className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto" href="#contact">
              Konsultasi Gratis Sekarang!
            </a>
            <a className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto" href="#service">
              Pilih Paket!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
