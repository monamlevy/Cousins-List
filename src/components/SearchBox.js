import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa2 ba b--black bg-light-blue br3'
                type='search'
                value={searchfield}
                placeholder='search your cousins' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;