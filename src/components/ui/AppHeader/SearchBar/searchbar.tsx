'use client';
import styles from "./searchbar.module.css";
import search from "@/components/api/AutoComplete/autocomplete";
import { useState } from "react";

export default function SearchBar() {
    // Type for the search results
    type SearchResult = {
        name: string;
        zip: string;
        state: string;
        country: string;
    };

    const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null);

    const handleSearch = async (query: string) => {
        if(query.length < 3) {
            setSearchResults(null);
            return;
        }

        const results = await search(query);
        console.log(results);
        setSearchResults(results);
        
    };


    return(
        <div className={styles.searchBarContainer}>
            <input 
            type="text" 
            placeholder="Search for a city name or zip code..." 
            className={styles.searchBar} 
            onChange={(e) => handleSearch(e.target.value)} />

            <div className={styles.searchResults}>
                {searchResults && searchResults.length > 0 ? (
                    searchResults.map((result, index) => (

                        <div key={index} className={styles.searchResultItem}>
                            <a><p className="text-sm font-medium text-gray-300">{result.name}, {result.state}, {result.country}</p></a>
                        </div>

                    ))
                ) : null}
            </div>
        </div> 
        
    );
}