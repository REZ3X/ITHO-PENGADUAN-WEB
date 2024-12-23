import React, { useState } from 'react';

const SearchPengaduan = ({ onSearch }) => {
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleSearchChange = (event) => {
        setSearchKeyword(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className="mb-4 relative">
            <input
                type="text"
                placeholder="Cari Pengaduan..."
                value={searchKeyword}
                onChange={handleSearchChange}
                className="p-2 pl-10 border rounded w-full focus:outline-none"
            />
            <i className="mt-[-3px] bi bi-search absolute left-3 top-3 text-gray-500"></i>
        </div>
    );
};

export default SearchPengaduan;