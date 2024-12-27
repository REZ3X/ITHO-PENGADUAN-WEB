import React from 'react';
import { useRouter } from 'next/router';

const Container = ({ iconSrc, title, description, link }) => {
    const router = useRouter(); // Use useRouter from next/router

    const handleClick = () => {
        router.push(link); // Navigate to the desired link
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
    return (
        <div className="flex mt-6 flex-col lg:flex-row w-3/4 gap-6">
            <Container
                iconSrc="images/support.png"
                title="Buat Pengaduan"
                description="Solusi meyelesaikan kendala Layanan Itho Indostock."
                link="/pengaduan"
            />
            <Container
                iconSrc="images/solution.png"
                title="Buat Aspirasi"
                description="Kirim saran dan masukan untuk layanan Itho Indostock."
                link="/aspirasiForm"
            />
            <Container
                iconSrc="images/note.png"
                title="Permintaan Informasi"
                description="Ajukan permintaan informasi terkait layanan Itho Indostock."
                link="/informasiForm"
            />
        </div>
    );
};

export default ThreeContainers;