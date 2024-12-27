export default function Footer() {
    return (
        <footer className="bg-blue w-full">
            <div className="w-full px-4 lg:px-16 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex flex-col items-start">
                            <img
                                src="https://indostock.id/img/logo-itho.png"
                                alt="Logo"
                                className="h-8 mr-3"
                            />
                            <span className="text-sm text-white w-72">
                                PT ITHO Indostock adalah perusahaan teknologi informasi yang bergerak pada pengembangan berbagai macam aplikasi dengan memberikan prioritas pada layanan pembuatan aplikasi dan website, penyediaan internet, penyediaan hardware, serta jasa konsultan teknologi informasi.
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                                Tautan Lain
                            </h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://goent26.smarteschool.net/about"
                                        className="hover:underline"
                                    >
                                        Go Entrepreneur
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="https://smarteschool.id/"
                                        className="hover:underline"
                                    >
                                        Smarteschool
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="https://gosports.id/"
                                        className="hover:underline"
                                    >
                                        Go Sports
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://kantingo-admin.smarteschool.net/login"
                                        className="hover:underline"
                                    >
                                        KantinGo
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                                Follow us
                            </h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <a
                                        href="#"
                                        className="hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:underline"
                                    >
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                                Kantor Pusat
                            </h2>
                            <ul className="text-white font-medium w-32">
                                <li className="mb-4 w-32">
                                    <a
                                        href="#"
                                        className="hover:underline w-32 text-sm"
                                    >
                                        Gedung ITHO, Jl. Karang Tengah Raya, Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota 12440
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-white sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-center">
                    <span className="text-sm text-white sm:text-center">
                        &copy; {new Date().getFullYear()} Slaviors. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
