import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FrequentlyAskedProblem from "@/components/allPengaduan";
import JumbotronPengaduan from "@/components/jumbotronPengaduan";
import Footer from "@/components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pengaduan = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // or a loading spinner
    }

    return (
        <div className="min-h-screen flex flex-col w-full ">
            <div className="fixed inset-0 bg-backgroundImg bg-no-repeat bg-cover z-0"></div>
            <JumbotronPengaduan />
            <main className="relative z-10 flex-grow w-full flex flex-row items-start mt-8">
                <div className="container w-full flex flex-col items-center justify-center p-4" data-aos="fade-up">
                    <FrequentlyAskedProblem />
                </div>
            </main>
        </div>
    );
};

export default Pengaduan;