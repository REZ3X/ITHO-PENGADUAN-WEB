import React from 'react';
import TutorialSesData from '@/utils/tutorialSesData';

const MostWatch = () => {
    const tutorials = TutorialSesData();

    return (
        <div className="h-auto mt-8 flex flex-col items-center justify-center bg-blue rounded-md backdrop-blur-2xl p-4 w-3/4">
            <h1 className="text-3xl self-start font-bold text-white mb-8">Video Tutorial Paling Banyak Ditonton</h1>
            <div className="grid text-white grid-cols-1 md:grid-cols-3 gap-8">
                {tutorials.map((tutorial) => (
                    <div key={tutorial.id} className="bg-darkBlue pb-6 p-4 rounded-lg shadow-md mt-[-15px]">
                        <img src={tutorial.thumbnail} alt={tutorial.title} className="w-full h-36 object-cover rounded-md mb-4" />
                        <h2 className="text-lg font-semibold mb-4">{tutorial.title}</h2>
                        <a href={tutorial.url} target="_blank" rel="noopener noreferrer" className="btn border-2 border white text-white py-2 px-4 rounded">
                            Lihat Video
                        </a>
                    </div>
                ))}
            </div>
            <a href="https://youtube.com/@smarteschool_id?si=e2i-CazEsq6DHjuf" target="_blank" rel="noopener noreferrer" className="btn bg-white text-[#5a6b58] py-2 px-4 self-start rounded mt-8">
                Lihat Semua
            </a>
        </div>
        <d
    );
};

export default MostWatch;