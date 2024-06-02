import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({onSearchChange}) => {
    const[search, setSearch] = useState(null);
    const url = '/places/%7BplaceId%7D/distance?toPlaceId=Q60';

    const loadOptions = (inputValue) => {
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
        const HonC = (searchData) => {
            setSearch(searchData);
            onSearchChange(searchData);

        }

    return (
        <AsyncPaginate
             placeholder="Search for your City"
             debounceTimeout={600}
             value={search}
             onChange={HonC}
             loadOptions={loadOptions}
        />
    )
}

export default Search;