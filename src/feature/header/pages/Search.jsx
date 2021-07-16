import React, { useState } from 'react';
import SearchUi from '../components/searchui';

function Search() {
    const [searchvalue,setSearchValue] = useState("");
    const onhandleChange = (e) => {
        setSearchValue(e.target.value);
    }
    console.log(searchvalue);
    return (
        <div>
            <SearchUi value={searchvalue} onChange = {onhandleChange}/>
        </div>
    );
}

export default Search;