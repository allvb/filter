import React from 'react';

export default function Toolbar({filters, selected, onSelectFilter}) {
    return (
        <nav className='menu'>
            {filters.map(item => {
                return (
                    <ul
                        className={item === selected ? "active" : ""}
                        key={item}
                        onClick={() => onSelectFilter(item)} >

                        {item}
                    </ul>
                );
            })}
        </nav>
    )
}
