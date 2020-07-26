import React from 'react'

export default function SearchForm(props) {
    const {handleFormChange , searchWord } = props;
    return (
        <div>
            <input
            value={searchWord}
            onChange={(event) => handleFormChange(event)}
            />        
        </div>
    )
}
