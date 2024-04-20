import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./LandItem.css";
import { useState } from "react";
import Heart from "react-animated-heart";
import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";

const LandItem = (props) => {
    const carouselId = uuidv4(); // Generate a unique id for the carousel
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {

        setIsLiked(!isLiked);


        const landIndex = dummyLand.findIndex(land => land.id === props.id);
        if (landIndex !== -1) {

            const updatedLand = { ...dummyLand[landIndex] };
            const authorId = updatedLand.author;


            if (!isLiked) {
                updatedLand.likes.push(authorId);
            } else {
                updatedLand.likes = updatedLand.likes.filter(userId => userId !== authorId);
            }

            const updatedDummyLand = [...dummyLand];
            updatedDummyLand[landIndex] = updatedLand;
            console.log(updatedDummyLand);
        }
    };
    return (
        <li className="land-listing">
            <div className="favourite-icon">  <Heart isClick={isLiked} onClick={handleLike} /></div>
            <div className="listing-text-frame">
                <div className="div-2">
                    <p className="text-wrapper-2"><b>Name of the land given</b></p>
                    <p className="p">A small by line about the land that has been listed</p>
                </div>
                <div className="parameters-frame">
                    <div className="div-2">
                        <div className="text-wrapper-2"><b>₹ {props.price}</b></div>
                        <div className="text-wrapper-3">per night</div>
                    </div>
                    <img className="line" alt="Line" src="/line-8.svg" />
                    <div className="div-2">
                        <div className="text-wrapper-2"><b>{props.area}sqft</b></div>
                    </div>
                    <img className="line" alt="Line" src="/line-8.svg" />
                    <div className="div-2">
                        <div className="text-wrapper-2"><b>{props.landType}</b></div>
                    </div>
                </div>
                <div className="highlights-frame">
                    <div className="text-wrapper-4" style={{ display: "inline-block" }}>Highlights:</div>
                    {props.highlights.map((highlight, index) => (
                        <div key={index} className="frame" style={{ margin: '1.5px' }}>
                            <div className="text-wrapper-5">{highlight}</div>
                        </div>
                    ))}
                </div>
                <p className="situated-in">{props.location}</p>
                <div>
                    <Link style={{ marginRight: "15px", textDecoration: 'none' }} to={`/property/${props.id}`} className="button-frame"><b>View Property</b></Link>
                    <div style={{ display: "inline-block" }}>
                        <svg className="button-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                        <button className="button-frame1"><b>Contact</b></button>
                    </div>
                </div>
            </div>
            <div>
                <div id={`carouselExample-${carouselId}`} className="carousel slide">
                    <div className="carousel-inner">
                        {props.images.map((image, index) => (
                            <div key={uuidv4()} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img className="additional-image" alt={image.filename} src={image.url} />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample-${carouselId}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample-${carouselId}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </li>
    );
};

export default LandItem;
