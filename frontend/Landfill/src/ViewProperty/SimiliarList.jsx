
import React from 'react';
import SimiliarProperties from './SimiliarProperties';
import "./SimiliarList.css";

const SimiliarList = (props) => {
    if (props.item.length === 0) {
        return (
            <div> <h1> Nothing to Display !!</h1></div>
        );
    }
    return (
        <>
            {props.item.slice(0, 4).map(land =>
                <ul className='LandList'>
                    <SimiliarProperties
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

export default SimiliarList;
