export default function FormInformasi({isExpanded, toggleExpand}) {
    return (
        <div
            className={`container transition duration-500 mx-auto p-4 bg-mediumGreen rounded-lg shadow-md w-full ${!isExpanded ? 'hover:bg-darkGreen' : ''}`}>
            <div className="h-full flex justify-between items-center cursor-pointer" onClick={toggleExpand}>
                <h1 className="text-2xl text-white font-bold">Permintaan Informasi</h1>
                <svg
                    className={`w-6 h-6 text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isExpanded ? 'max-h-[700px]' : 'max-h-0'}`}>
                <div className="mt-4">
                    <form className="flex flex-col" action="https://formsubmit.co/prozycal@gmail.com" method="POST">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-white">Nama</label>
                            <input type="text" id="name" name="name" required
                                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                            <input type="email" id="email" name="email" required
                                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="category" className="block text-sm font-medium text-white">Pilih
                                Layanan</label>
                            <select id="category" name="category" required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                                <option value="pengaduan">Smart E School</option>
                                <option value="aspirasi">KantinGo</option>
                                <option value="permintaan informasi">GoSports</option>
                                <option value="permintaan informasi">Indostock.id</option>
                                <option value="permintaan informasi">PerpusGo</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="category" className="block text-sm font-medium text-white">Topik</label>
                            <select id="category" name="category" required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                                <option value="pengaduan">Pembelajaran</option>
                                <option value="aspirasi">Profil</option>
                                <option value="permintaan informasi">Topic3</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="isi" className="block text-sm font-medium text-white">Detail
                                Permintaan</label>
                            <textarea id="isi" name="isi" required
                                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 h-32"></textarea>
                        </div>
                        <button type="submit"
                                className="bg-darkGreen text-white px-4 py-2 rounded-md hover:bg-oliveGreen focus:outline-none focus:ring-2 focus:ring-offset-2">Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}