import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPIoptions } from "../../api"

const Search = ({onSearchChange}) => {
    const[search, setSearch] = useState(null);
   

    const loadOptions = async (_inputValue) => {
        
            try {
            const response = await fetch('$ {GEO_API_URL}/cities?minPopulation=1000000&namePrefix = ${_inputValue}', geoAPIoptions);
            const response_1 = await response.json();
            return {
                options: response_1.data.map((_city) => {
                    return {
                        value: '${_city.latitute} ${_city.longitute}',
                        label: '${_city.name}, ${_city.countryCode}',
                    };
                })
            };
        } catch (err) {
            return console.error(err);
        }

            

            

    };
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
};

export default Search;