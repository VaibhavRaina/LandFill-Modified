// LandList.jsx
import React from 'react';
import LandItem from './LandItem';
import "./LandList.css";

const LandList = (props) => {
    if (props.item.length === 0) {
        return (
            <div> <h1> Nothing to Display !!</h1></div>
        );
    }
    return (
        <>
            {props.item.map(land =>
                <ul className='LandList'>
                    <LandItem
                        id={land.id}
                        key={land.id}
                        title={land.title}
                        price={land.price}
                        highlights={land.highlights || []}
                        area={land.area}
                        description={land.description}
                        landType={land.landType}
                        location={land.location}
                        images={land.images}
                        author={land.author}
                    />
                </ul>
            )}

        </>
    )
}

export default LandList;
