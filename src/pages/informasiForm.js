import { useRouter } from 'next/router';

const InformasiForm = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-backgroundImg bg-no-repeat bg-cover">
            <button onClick={() => router.push('/')} className="btn bg-white text-[#5a6b58] fixed top-4 left-4 py-2 px-4 rounded">
                Back
            </button>
            <div className="container transition duration-500 mx-auto p-4 mb-4 bg-mediumGreen rounded-lg shadow-md w-[700px] mt-16">
                <h1 className="text-2xl text-white font-bold mb-4">Permintaan Informasi</h1>
                <form className="flex flex-col" action="https://formsubmit.co/prozycal@gmail.com" method="POST">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-white">Nama</label>
                        <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                        <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-white">Nomer Telepon</label>
                        <input type="tel" id="phone" name="phone" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
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
                    <div className="mb-4">
                        <label htmlFor="topic" className="block text-sm font-medium text-white">Topik</label>
                        <select id="topic" name="topic" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                            <option value="pembelajaran">Pembelajaran</option>
                            <option value="profil">Profil</option>
                            <option value="topic3">Topic3</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="isi" className="block text-sm font-medium text-white">Detail Permintaan</label>
                        <textarea id="isi" name="isi" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 h-32"></textarea>
                    </div>
                    <button type="submit" className="bg-darkGreen text-white px-4 py-2 rounded-md hover:bg-oliveGreen focus:outline-none focus:ring-2 focus:ring-offset-2">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default InformasiForm;