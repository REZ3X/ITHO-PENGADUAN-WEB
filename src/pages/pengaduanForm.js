import { useRouter } from 'next/router';

const PengaduanForm = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-backgroundImg bg-no-repeat bg-cover">
            <button onClick={() => router.push('/pengaduanDasbor')} className="btn bg-white text-[#5a6b58] py-2 px-4 rounded mb-4">
                Back
            </button>
            <div className="container transition duration-500 mx-auto p-4 bg-mediumGreen rounded-lg shadow-md w-full">
                <h1 className="text-2xl text-white font-bold mb-4">Pengaduan</h1>
                <form className="flex flex-col" action="https://formsubmit.co/prozycal@gmail.com" method="POST">
                    <div className="mb-4">
                        <label htmlFor="judul" className="block text-sm font-medium text-white">Judul Laporan</label>
                        <input type="text" id="judul" name="judul" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-white">Nama</label>
                        <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                        <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="isi" className="block text-sm font-medium text-white">Isi Laporan</label>
                        <textarea id="isi" name="isi" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 h-32"></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tanggal" className="block text-sm font-medium text-white">Tanggal Kejadian</label>
                        <input type="date" id="tanggal" name="tanggal" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium text-white">Pilih Layanan</label>
                        <select id="category" name="category" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                            <option value="pengaduan">Smart E School</option>
                            <option value="aspirasi">KantinGo</option>
                            <option value="permintaan informasi">GoSports</option>
                            <option value="permintaan informasi">Indostock.id</option>
                            <option value="permintaan informasi">PerpusGo</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-darkGreen text-white px-4 py-2 rounded-md hover:bg-oliveGreen focus:outline-none focus:ring-2 focus:ring-offset-2">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default PengaduanForm;