import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer className="relative bg-darkGreen text-white w-full pb-8 pt-16 lg:pt-32 ">
            {/* Wavy SVG Top */}
            <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
                <path fill="#525B44" d="M0,96L48,85.3C96,75,192,53,288,46.7C384,40,480,64,576,69.3C672,75,768,53,864,58.7C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,80L1440,75L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>

            <div className="container relative w-full z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 w-full px-10 lg:px-24 ">
                    <div className="col-span-1">
                        <img src="https://indostock.id/img/logo-itho.png" alt="ITHO Logo" className="w-28 mb-2 grayscale mix-blend-lighten brightness-200" />
                        <p className="text-sm">
                            PT ITHO Indostock adalah perusahaan teknologi informasi yang bergerak pada pengembangan berbagai macam aplikasi dengan memberikan prioritas pada layanan pembuatan aplikasi dan website, penyediaan internet, penyediaan hardware, serta jasa konsultan teknologi informasi.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-xl font-semibold mb-4">Tautan Lain</h4>
                        <ul className="space-y-2">
                            <li><a href="https://goent26.smarteschool.net/about" className="text-sm hover:text-gray-300" target="_blank">Go Entrepreneur</a></li>
                            <li><a href="https://smarteschool.id/" className="text-sm hover:text-gray-300" target="_blank">Smarteschool</a></li>
                            <li><a href="https://gosports.id/" className="text-sm hover:text-gray-300" target="_blank">Go Sports</a></li>
                            <li><a href="https://kantingo-admin.smarteschool.net/login" className="text-sm hover:text-gray-300" target="_blank">KantinGo</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-xl font-semibold mb-4">Kantor Pusat</h4>
                        <address className="not-italic text-sm">
                            Gedung ITHO, Jl. Karang Tengah Raya, Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota 12440
                        </address>
                    </div>

                    <div className="col-span-1 pr-4">
                        <h4 className="text-xl font-semibold mb-4">Ikuti Kami</h4>
                        <div className="flex space-x-4">
                            <a href="https://web.facebook.com/ithoindostock?locale=id_ID" className="text-white text-xl hover:text-gray-300">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://twitter.com" className="text-white text-xl hover:text-gray-300">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="https://instagram.com" className="text-white text-xl hover:text-gray-300">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://linkedin.com" className="text-white text-xl hover:text-gray-300">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-4 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Slaviors. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
