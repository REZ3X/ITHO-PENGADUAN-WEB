// components/jumbotron.js
export default function Jumbotron() {
    return (
        <div className="relative bg-blue text-white py-12 text-center w-full flex flex-col gap-4 justify-center items-center pb-48">
            <h1 className="text-6xl font-bold font-nunito">Layanan Aspirasi dan Pengaduan Online</h1>
            <p className="font-nunito mt-4 mb-10 w-full max-w-screen-lg">Layanan Aspirasi dan Pengaduan Online PT ITHO Indostock merupakan wadah yang dirancang untuk memberikan kesempatan kepada masyarakat dan pelanggan untuk menyampaikan aspirasi serta pengaduan terkait produk dan layanan perusahaan.</p>

            {/* Wavy SVG */}
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path fill="#eef5ff" fill-opacity="0.8"d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,192,576,186.7C672,181,768,139,864,144C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                <path fill="#dbeafe" d="M0,288L48,277.3C96,267,192,245,288,240C384,235,480,256,576,250.7C672,245,768,203,864,208C960,213,1056,267,1152,282.7C1248,299,1344,277,1392,266.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                <path fill="#eef5ff" d="M0,320L48,304C96,288,192,256,288,245.3C384,235,480,256,576,261.3C672,267,768,245,864,240C960,235,1056,256,1152,266.7C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
    );
}