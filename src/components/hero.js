const HeroSection = () => {
    return (
        <section className=" w-full bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <a
                    href="#"
                    className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200"
                >
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>
                    <span className="text-sm font-medium">
            Jumbotron component was launched! See what's new
          </span>
                    <svg
                        className="w-2.5 h-2.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 9L5 5 1 1"
                        />
                    </svg>
                </a>
                <h1 className="mb-4 text-4xl font-bold font-sans text-gray-900 md:text-5xl lg:text-6xl">
                    Layanan Aspirasi dan Pengaduan Onlinee
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Layanan Aspirasi dan Pengaduan Online PT ITHO Indostock merupakan wadah yang dirancang untuk memberikan kesempatan kepada masyarakat dan pelanggan untuk menyampaikan aspirasi serta pengaduan terkait produk dan layanan perusahaan.</p>
            </div>
            <div className="bg-gradient-to-b from-blue-50 to-transparent w-full h-full absolute top-0 left-0 z-0"></div>
        </section>
    );
};

export default HeroSection;
