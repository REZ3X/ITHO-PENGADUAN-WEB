import { useState } from 'react';
import FormPengaduan from './formPengaduan';
import FormAspirasi from './formAspirasi';
import FormInformasi from './formInformasi';

export default function CategoryChoice() {
    const [selectedCategory, setSelectedCategory] = useState('pengaduan');

    const renderForm = () => {
        switch (selectedCategory) {
            case 'pengaduan':
                return <FormPengaduan />;
            case 'aspirasi':
                return <FormAspirasi />;
            case 'permintaan informasi':
                return <FormInformasi />;
            default:
                return <p className="text-white ">Pilih Kategori</p>;
        }
    };

    return (
        <div className="container mx-auto p-4 flex flex-col items-center">
            <div className="mb-4">
                <label className="block text-sm font-medium text-white">Pilih Kategori</label>
                <div className="mt-1 flex space-x-4">
                    <label className={`inline-flex items-center px-4 py-2 rounded-md cursor-pointer ${selectedCategory === 'pengaduan' ?  'bg-darkGreen text-white' : 'bg-gray-200'}`}>
                        <input
                            type="radio"
                            name="category"
                            value="pengaduan"
                            checked={selectedCategory === 'pengaduan'}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="hidden"
                        />
                        <span>Pengaduan</span>
                    </label>
                    <label className={`inline-flex items-center px-4 py-2 rounded-md cursor-pointer ${selectedCategory === 'aspirasi' ? 'bg-darkGreen text-white' : 'bg-gray-200'}`}>
                        <input
                            type="radio"
                            name="category"
                            value="aspirasi"
                            checked={selectedCategory === 'aspirasi'}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="hidden"
                        />
                        <span>Aspirasi</span>
                    </label>
                    <label className={`inline-flex items-center px-4 py-2 rounded-md cursor-pointer ${selectedCategory === 'permintaan informasi' ? 'bg-darkGreen text-white' : 'bg-gray-200'}`}>
                        <input
                            type="radio"
                            name="category"
                            value="permintaan informasi"
                            checked={selectedCategory === 'permintaan informasi'}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="hidden"
                        />
                        <span>Permintaan Informasi</span>
                    </label>
                </div>
            </div>
            {renderForm()}
        </div>
    );
}