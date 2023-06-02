import React from 'react';
import { useState } from 'react';
import Toolbar from './ToolBar';
import ProjectList from './ProjectList';
import images from '../images/images';


export const Portfolio = () => {
    
    const [active, setActive] = useState("All");

    const filters = ["All", "Websites", "Flayers", "Business Cards"];

    let arryaOfImages = images.filter(item => item.category === active);

    const onSelectFilter = function handleOnSelected(e) {
        setActive((prev) => (prev = e));
        arryaOfImages = images.filter(item => item.category === e);
        console.log(e);
    }

    return (
        <>
        <Toolbar
            filters={filters}
            selected={active}
            onSelectFilter={onSelectFilter}
            // onSelectFilter={(e) => {
            //     setActive((prev) => (prev = e));
            //     arryaOfImages = images.filter(item => item.category === e);
            //     <ProjectList images={arryaOfImages} />
            // }}
        />

        <ProjectList images={arryaOfImages} />
</>
    );
}
