import React, { useState } from 'react';
import DataPengaduan from '@/utils/frequentlyAskedProblem';

const SearchBar = ({ placeholder }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value) {
            const results = DataPengaduan().filter(problem =>
                problem.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredResults(results);
        } else {
            setFilteredResults([]);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center p-4 w-full">
            <div className="relative flex h-10 w-full md:w-2/5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35M16.65 10.35a6.3 6.3 0 11-12.6 0 6.3 6.3 0 0112.6 0z"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-transparent focus:outline-none"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            {searchTerm && filteredResults.length > 0 && (
                <div className="relative w-full md:w-2/5">
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                        <ul>
                            {filteredResults.map(problem => (
                                <li key={problem.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                                    {problem.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;