import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FrequentlyAskedProblem from "@/components/allPengaduan";
import JumbotronPengaduan from "@/components/jumbotronPengaduan";
import Footer from "@/components/footer";

const PengaduanDasbor = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // or a loading spinner
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="fixed inset-0 bg-backgroundImg bg-no-repeat bg-cover z-0"></div>
            <main className="relative z-10 flex-grow w-full flex flex-row items-start mt-64">
                <div className="container w-1/3 flex flex-col items-center justify-center ml-[-150px]">
                    <button onClick={() => router.push('/')} className="btn bg-white text-[#5a6b58] py-2 px-4 rounded mb-4">
                        Back
                    </button>
                    <button onClick={() => router.push('/pengaduanForm')} className="btn bg-[#5a6b58] text-white py-2 px-4 mr-[-80px] rounded">
                        Buat Pengaduan
                    </button>
                </div>
                <div>
                    <JumbotronPengaduan />
                    <FrequentlyAskedProblem />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PengaduanDasbor;