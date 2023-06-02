import React from 'react';

export default function Toolbar({filters, active, onSelectFilter}) {
    return (
        <nav className='menu'>
            {filters.map(item => {
                return (
                    <ul
                        className={item === active ? "active" : ""}
                        key={item}
                        onClick={onSelectFilter(item)}
                    >
                    {item}
                    </ul>
                );
            })}
        </nav>
    )
}
