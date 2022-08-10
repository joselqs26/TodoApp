import React from "react";

const useSearching = (items, attributeSearch = 'text') => {
    const [searchValue, updateSearch] = React.useState("");

    const searchItems = () => {
        return items.filter(
            item => {
                return item[attributeSearch]
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
            }
        )
    }

    return { searchValue , updateSearch , searchItems };
};

export { useSearching };
