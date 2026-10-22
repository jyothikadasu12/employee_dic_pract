interface SearchBoxProps{
    value: string;
    onSearch: (query: string) => void;
}

export default function searchBox({value, onSearch} : SearchBoxProps) {
    return(
        <input type="search"
               placeholder= "search by name...."
               value ={value}
               onChange = {(event) => onSearch(event.target.value)}
               aria-label= "search employee" />
    );
}