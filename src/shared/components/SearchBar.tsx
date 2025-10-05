import { useEffect, useState } from "react";

interface Props{
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({placeholder = 'Buscar', onQuery}: Props) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            onQuery(query);
        }, 700);

        return (() => {
            clearTimeout(timeOutId);
        });

    }, [query, onQuery]);

    const handleSearch = () => {
        onQuery(query);
    };

    const handleSearchEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            handleSearch();
            setQuery('');
        }
    }

    return (
        <div className="search-container">
            <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleSearchEnter}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};