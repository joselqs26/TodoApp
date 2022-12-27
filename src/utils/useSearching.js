import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const useSearching = (items, attributeSearch = 'text') => {
    const {search} = useParams(); 
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = React.useState( search || '');

    const searchItems = () => {
        return items.filter(
            item => {
                return item[attributeSearch]
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
            }
        )
    }

    const updateSearch = ( newSearch ) => {
        setSearchValue(newSearch)
        navigate(`/${newSearch}`)
    }

    return { searchValue , updateSearch , searchItems };
};

export { useSearching };
