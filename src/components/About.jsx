export default function About() {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <section id="about">
      <div className="max-w-screen-xl px-4 py-12 sm:px-6 lg:mx-auto lg:py-48 lg:flex lg:items-center">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-auto ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">Mengapa Memilih Kami?</h2>

            <p className="mt-4 text-gray-600">
              Bosan dengan tampilan website yang itu-itu saja? Kami siap membantu Anda menciptakan website yang unik, menarik, dan efektif. Tim kami yang berpengalaman akan merancang website yang tidak hanya indah secara visual, tetapi juga
              mudah digunakan dan SEO friendly.
            </p>

            <a href="#contact" className="mt-8 inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-yellow-400">
              Konsultasi Gratis Sekarang!
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#" onClick={handleClick}>
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 512 512">
                  <rect width="512" height="512" fill="none" />
                  <path
                    fill="black"
                    d="m368.4 18.3l-55.7 55.8l125.2 125.2l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2l-46-46.1c-21.9-21.9-57.3-21.9-79.2 0M288 94.6l-9.2 2.8l-144.1 43.2c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4l153.6-153.5c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1l2.7-9.2z"
                  />
                </svg>
              </span>

              <h2 className="mt-2 font-bold sm:text-xl">Desain Kreatif</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 lg:text-base">Kami akan menciptakan desain yang sesuai dengan branding bisnis Anda.</p>
            </a>

            <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#" onClick={handleClick}>
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                  <rect width="512" height="512" fill="none" />
                  <path
                    fill="black"
                    d="M2 6c.55 0 1-.45 1-1V4c0-.55.45-1 1-1h1c.55 0 1-.45 1-1s-.45-1-1-1H4C2.34 1 1 2.34 1 4v1c0 .55.45 1 1 1m3 15H4c-.55 0-1-.45-1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1c0 1.66 1.34 3 3 3h1c.55 0 1-.45 1-1s-.45-1-1-1M20 1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1 .45 1 1v1c0 .55.45 1 1 1s1-.45 1-1V4c0-1.66-1.34-3-3-3m2 17c-.55 0-1 .45-1 1v1c0 .55-.45 1-1 1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c1.66 0 3-1.34 3-3v-1c0-.55-.45-1-1-1m-3-3.13V9.13c0-.72-.38-1.38-1-1.73l-5-2.88c-.31-.18-.65-.27-1-.27s-.69.09-1 .27L6 7.39c-.62.36-1 1.02-1 1.74v5.74c0 .72.38 1.38 1 1.73l5 2.88c.31.18.65.27 1 .27s.69-.09 1-.27l5-2.88c.62-.35 1-1.01 1-1.73m-8 2.3l-4-2.3v-4.63l4 2.33zm1-6.33L8.04 8.53L12 6.25l3.96 2.28zm5 4.03l-4 2.3v-4.6l4-2.33z"
                  />
                </svg>
              </span>

              <h2 className="mt-2 font-bold sm:text-xl">Teknologi Terbaru</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 lg:text-base">Website Anda akan dibangun dengan teknologi terkini untuk memastikan kinerja yang optimal.</p>
            </a>

            <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#" onClick={handleClick}>
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                  <g fill="none">
                    <circle cx={12} cy={9} r={3} fill="black"></circle>
                    <path
                      fill="black"
                      fillRule="evenodd"
                      d="M17.451 15.908a.24.24 0 0 1-.067.304A8.96 8.96 0 0 1 12 18a8.96 8.96 0 0 1-5.384-1.788a.24.24 0 0 1-.067-.304C7.499 14.192 9.582 13 12 13s4.501 1.191 5.451 2.908"
                      clipRule="evenodd"
                    ></path>
                    <path
                      stroke="black"
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M17 4h.502c1.211 0 1.817 0 2.281.232a2.2 2.2 0 0 1 .985.985C21 5.68 21 6.287 21 7.498V8m-4 12h.502c1.211 0 1.817 0 2.281-.232a2.2 2.2 0 0 0 .985-.985c.232-.464.232-1.07.232-2.281V16M7 4h-.502c-1.211 0-1.817 0-2.281.232a2.2 2.2 0 0 0-.985.985C3 5.68 3 6.287 3 7.498V8m4 12h-.502c-1.211 0-1.817 0-2.281-.232a2.2 2.2 0 0 1-.985-.985C3 18.32 3 17.713 3 16.502V16"
                    ></path>
                  </g>
                </svg>
              </span>

              <h2 className="mt-2 font-bold sm:text-xl">Fokus pada Pengguna</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 lg:text-base">Kami mendesain website dengan mempertimbangkan pengalaman pengguna yang optimal.</p>
            </a>

            <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="#" onClick={handleClick}>
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24">
                  <g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                    <path d="M9 14c0 1.657 2.686 3 6 3s6-1.343 6-3s-2.686-3-6-3s-6 1.343-6 3"></path>
                    <path d="M9 14v4c0 1.656 2.686 3 6 3s6-1.344 6-3v-4M3 6c0 1.072 1.144 2.062 3 2.598s4.144.536 6 0S15 7.072 15 6s-1.144-2.062-3-2.598s-4.144-.536-6 0S3 4.928 3 6"></path>
                    <path d="M3 6v10c0 .888.772 1.45 2 2"></path>
                    <path d="M3 11c0 .888.772 1.45 2 2"></path>
                  </g>
                </svg>
              </span>

              <h2 className="mt-2 font-bold sm:text-xl">Harga Terjangkau</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 lg:text-base">Kami menawarkan paket yang fleksibel dengan harga yang kompetitif.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
