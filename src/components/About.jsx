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
                <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem" viewBox="0 0 24 24">
                  <path
                    fill="black"
                    d="M3.323 12c0 3.438 2 6.4 4.892 7.808L4.077 8.469A8.65 8.65 0 0 0 3.323 12M12 20.677a8.8 8.8 0 0 0 2.885-.492l-.062-.116l-2.67-7.307l-2.6 7.561c.77.23 1.593.354 2.447.354M13.192 7.93l3.139 9.33l.869-2.892c.37-1.2.654-2.061.654-2.807c0-1.077-.385-1.816-.708-2.385c-.446-.723-.854-1.33-.854-2.039c0-.8.6-1.538 1.462-1.538h.107A8.65 8.65 0 0 0 12 3.323a8.67 8.67 0 0 0-7.246 3.908l.554.015c.907 0 2.307-.115 2.307-.115c.477-.023.531.661.062.715c0 0-.47.062-1 .085l3.17 9.4l1.9-5.692l-1.355-3.708a16 16 0 0 1-.907-.077c-.47-.03-.416-.746.053-.723c0 0 1.431.115 2.285.115c.908 0 2.308-.115 2.308-.115c.469-.023.53.661.061.715c0 0-.469.054-1 .085m3.17 11.569a8.676 8.676 0 0 0 3.253-11.662a8.2 8.2 0 0 1-.6 4zM12 22a10 10 0 1 1 0-20a10 10 0 0 1 0 20"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold sm:text-xl">Platform yang Fleksibel</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 lg:text-base">Sesuaikan tampilan dan fungsionalitas website Anda sesuai kebutuhan.</p>
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
