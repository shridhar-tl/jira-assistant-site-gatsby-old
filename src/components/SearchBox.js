import React, { useState } from 'react';
import { useRouter } from 'gatsby';
import TextBox from './TextBox';

const SearchBox = function () {
    const [searchText, setText] = useState('');
    const router = useRouter();

    const searchTextChanged = (searchText) => setText(searchText);

    const searchKeyPress = (e) => {
        const text = searchText?.trim();
        if (text) {
            setText(text);
            const searchPath = `/search/${encodeURIComponent(text)}`;

            if (document.location.search?.includes('emb=true')) {
                window.open(searchPath);
            } else {
                router.push(searchPath);
            }
        }
    };

    return (
        <div className="search">
            <TextBox value={searchText} className="search-form" placeholder="Search"
                onChange={searchTextChanged} onEnterKey={searchKeyPress} />
            <span className="fa fa-search" onClick={searchKeyPress} disabled={!!searchText} />
        </div>
    );
}

export default SearchBox;