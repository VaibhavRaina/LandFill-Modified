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
                        country={land.country}
                        state={land.state}
                        village={land.village}
                        street={land.street}
                        landmark={land.landmark}
                        city={land.city}
                        pincode={land.pincode}
                        images={land.images}
                        author={land.author}
                        wall={land.wall}
                        possession={land.possession}
                        gates={land.gates}
                        length={land.length}
                        breadth={land.breadth}
                    />
                </ul>
            )}

        </>
    )
}

export default LandList;
