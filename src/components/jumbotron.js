// components/jumbotron.js
export default function Jumbotron() {
    return (
        <div className="relative bg-darkGreen text-white py-12 text-center w-full">
            <h1 className="text-6xl font-bold">Layanan Aspirasi dan Pengaduan Online</h1>
            <p className="mt-4 mb-8">lorem ipsum</p>

            {/* Wavy SVG */}
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
                <path fill="#525B44" d="M0,96L48,85.3C96,75,192,53,288,46.7C384,40,480,64,576,69.3C672,75,768,53,864,58.7C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,80L1440,75L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
            </svg>
        </div>
    );
}
