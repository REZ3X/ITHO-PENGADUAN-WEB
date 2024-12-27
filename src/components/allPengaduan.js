import React, {useState, useEffect, useMemo} from 'react';
import DataPengaduan from '@/utils/frequentlyAskedProblem';
import SearchPengaduan from '@/components/searchPengaduan';
import {useRouter} from "next/router";

const FrequentlyAskedProblems = () => {
    const router = useRouter();
    const problems = useMemo(() => DataPengaduan(), []);
    const [expandedId, setExpandedId] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [filteredProblems, setFilteredProblems] = useState(problems);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleFilterChange = (event) => {
        const {value, checked} = event.target;
        setSelectedFilters((prevFilters) =>
            checked ? [...prevFilters, value] : prevFilters.filter((filter) => filter !== value)
        );
    };

    const resetFilters = () => {
        setSelectedFilters([]);
    };

    const handleSearch = (keyword) => {
        setFilteredProblems(
            problems.filter((problem) =>
                problem.title.toLowerCase().includes(keyword.toLowerCase())
            )
        );
    };

    useEffect(() => {
        if (selectedFilters.length === 0) {
            setFilteredProblems(problems);
        } else {
            setFilteredProblems(problems.filter((problem) => selectedFilters.includes(problem.layanan)));
        }
    }, [selectedFilters, problems]);

    const filterOptions = useMemo(() => ['Smart E School', 'GoSports', 'KantinGo'], []);

    return (
        <div className="min-h-screen w-full lg:w-1/2 sm:w-2/3 bg-blue rounded-lg mb-6 backdrop-blur-xl p-4">

            <SearchPengaduan onSearch={handleSearch}/>
            <div className="mb-4">
                <button onClick={() => router.push('/')} className="btn bg-white text-[#5a6b58] py-2 px-4 rounded mb-4 mr-4">
                    Back
                </button>
                <button
                    onClick={() => setShowFilter(!showFilter)}
                    className="btn bg-darkBlue text-white py-1 px-4 mr-4 rounded"
                >
                    Filter by Layanan
                </button>
                <button onClick={() => router.push('/pengaduanForm')}
                        className="btn bg-softBlue text-white py-1 px-4 rounded">
                    Buat Pengaduan
                </button>
                {showFilter && (
                    <div className="mt-2 p-4 bg-white rounded shadow">
                        <h2 className="text-xl font-semibold mb-2">Select Layanan</h2>
                        <div className="flex space-x-4">
                            {filterOptions.map((layanan) => (
                                <label key={layanan} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        value={layanan}
                                        checked={selectedFilters.includes(layanan)}
                                        onChange={handleFilterChange}
                                    />
                                    <span>{layanan}</span>
                                </label>
                            ))}
                        </div>
                        <div className="mt-2">
                            <button onClick={resetFilters} className="btn bg-red-500 text-white py-1 px-4 rounded mr-2">
                                Reset Filters
                            </button>
                            <button onClick={() => setShowFilter(false)}
                                    className="btn bg-blue text-white py-1 px-4 rounded">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="space-y-4">
                {filteredProblems.map((problem) => (
                    <div key={problem.id} className="bg-white p-4 rounded shadow">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleExpand(problem.id)}
                        >
                            <h2 className="text-lg font-semibold">{problem.title}</h2>
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
        </div>
    );
};

export default FrequentlyAskedProblems;