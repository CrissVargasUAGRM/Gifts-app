import type { FC } from "react";

interface PreviousSearch {
    searches: string[];
    onClickSearch: (term: string) => void;
}

export const PreviousSearches: FC<PreviousSearch> = ({searches, onClickSearch}) => {
    return(
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                {searches.map((search) => (
                    <li key={search} onClick={() => onClickSearch(search)}>{search}</li>    
                ))}
            </ul>
        </div>
    );
};