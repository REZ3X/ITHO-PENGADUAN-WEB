import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = ({ iconSrc, title, description, link }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(link);
    };

    return (
        <div className="container flex flex-col items-center justify-between p-4 rounded-lg shadow-md h-[320px] w-full bg-blue">
            <div className="icon mb-2">
                <img src={iconSrc} alt={`${title} icon`} className="invert brightness-0 w-24" />
            </div>
            <h2 className="title text-xl font-semibold mb-2 text-white">{title}</h2>
            <p className="description text-center mb-4 text-white">{description}</p>
            <button onClick={handleClick} className="btn bg-white text-[#5a6b58] py-2 px-4 rounded">
                {title}
            </button>
        </div>
    );
};

const ThreeContainers = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div data-aos="fade-up" className="w-full flex justify-center items-center">
            <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full p-4 lg:p-0 md:w-3/4 gap-6">
                <Container
                    iconSrc="images/support.png"
                    title="Buat Pengaduan"
                    description="Solusi meyelesaikan kendala Layanan ITHO Indostock."
                    link="/pengaduan"
                />
                <Container
                    iconSrc="images/solution.png"
                    title="Buat Aspirasi"
                    description="Kirim saran dan masukan untuk layanan ITHO Indostock."
                    link="/aspirasiForm"
                />
                <Container
                    iconSrc="images/note.png"
                    title="Permintaan Informasi"
                    description="Ajukan permintaan informasi terkait layanan ITHO Indostock."
                    link="/informasiForm"
                />
            </div>
        </div>
    );
};

export default ThreeContainers;