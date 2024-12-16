import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ handleSearchNote }) => {
    return (
        <div className="search">
            <FaSearch className="search-icon" />
            <input
                type="text"
                placeholder="Cari catatan..."
                onChange={(e) => handleSearchNote(e.target.value)}
            />            
        </div>
    );
};

export default Search;