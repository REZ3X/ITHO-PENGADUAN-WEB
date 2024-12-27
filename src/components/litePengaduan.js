import React, { useState, useEffect } from 'react';
import DataPengaduan from '@/utils/frequentlyAskedProblem';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const FAQ = () => {
    const router = useRouter();
    const [expandedId, setExpandedId] = useState(null);
    const [randomProblems, setRandomProblems] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => {
        const problems = DataPengaduan();
        const shuffled = problems.sort(() => 0.5 - Math.random());
        setRandomProblems(shuffled.slice(0, 3));
    }, []);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className={"flex justify-center items-center w-full p-4 lg:p-0"}>
            <div className="w-full md:w-3/4 mt-8 bg-blue rounded-lg mb-6 backdrop-blur-xl p-4">
                <h1 className="text-3xl font-bold mb-4 text-white">FAQ</h1>
                <div className="space-y-4">
                    {randomProblems.map((problem, index) => (
                        <div key={problem.id} className="bg-white p-4 rounded shadow" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleExpand(problem.id)}
                            >
                                <h2 className="text-lg text-[#5a6b58] font-semibold">{problem.title}</h2>
                                <div className="flex items-center">
                                    <span className="ml-2 text-sm text-gray-600">{problem.layanan}</span>
                                    <span
                                        className={`ml-2 transform transition-transform duration-500 ${expandedId === problem.id ? 'rotate-180' : 'rotate-0'}`}
                                    >
                                    <i className="bi bi-chevron-down text-xm"></i>
                                </span>
                                </div>
                            </div>
                            <div
                                className={`mt-2 text-gray-700 overflow-hidden transition-max-height duration-500 ease-in-out ${expandedId === problem.id ? 'max-h-screen' : 'max-h-0'}`}
                            >
                                {problem.report}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => router.push('/pengaduan')}
                    className="btn bg-white text-[#5a6b58] py-2 px-4 rounded mt-8"
                >
                    Lihat Semua
                </button>
            </div>
        </div>
    );
};

export default FAQ;