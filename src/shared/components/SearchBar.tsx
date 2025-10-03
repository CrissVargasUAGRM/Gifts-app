
interface Props{
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({placeholder = 'Buscar', onQuery}: Props) => {
    return (
        <div className="search-container">
            <input
            type="text"
            placeholder={placeholder}
            value='Example'
            />
            <button>Buscar</button>
        </div>
    );
};