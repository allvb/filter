import React from 'react';
import { useState } from 'react';
import Toolbar from './ToolBar';
import ProjectList from './ProjectList';
import images from '../images/images';


export const Portfolio = () => {
    
    const [active, setActive] = useState("All");

    let  arryaOfImages = [];

    if (active === 'All') {
        arryaOfImages = images.filter(item => item);
    } else {
        arryaOfImages = images.filter(item => item.category === active);
    }

    const filters = ["All", "Websites", "Flayers", "Business Cards"];

    // let arryaOfImages = images.filter(item => item.category === active);

    const onSelectFilter = function handleOnSelected(e) {
        setActive(active => active = e);
        // arryaOfImages = images.filter(item => item.category === e);
        if (active === 'All') {
            arryaOfImages = images.filter(item => item);
        } else {
            arryaOfImages = images.filter(item => item.category === e);
        }
    }

    return (
        <div className='main'>
            <Toolbar
                filters={filters}
                selected={active}
                onSelectFilter={onSelectFilter}
            />
             <ProjectList images={arryaOfImages} />
        </div>
    );
}
