import React, { useState } from 'react';
import Header from '../Utils/Header'
import Container from '@mui/material/Container';
import dummyLand from '../dummyLand';
import './HomePage.css'
import PostProperty from './PostProperty';
import LandList from './LandList';


export default function HomePage() {
    const [mode, setMode] = useState('light'); // Initialize mode state
    const [searchLocation, setSearchLocation] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);
    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };
    const handleLocationChange = (event) => {
        setSearchLocation(event.target.value);
    };

    const filteredLand = dummyLand.filter((land) =>
        land.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        if (searchLocation === '') {
            setIsInputFocused(false);
        }
    };


    return (

        <Container disableGutters>
            <Header mode={mode} toggleColorMode={toggleColorMode} />
            <div
                sx={{
                    position: 'relative',
                    backgroundColor: 'white',
                    color: '#fff',
                    // mt: 8,
                    display: 'flex', // Use Flexbox layout
                    flexDirection: 'column', // Stack children vertically
                    alignItems: 'flex-end', // Align items to the right
                }}
            >


                <img
                    src="/featuredImage.jpg" // Adjust the path as necessary
                    alt="Featured Image"
                    style={{
                        position: "relative",
                        margin: "auto",
                        width: "100%",
                        height: "40rem"

                    }}

                />
                <div className='search'>
                    <div className="search-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-search"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <input
                        className={`query ${isInputFocused ? 'focused' : ''}`}
                        type="text"
                        value={searchLocation}
                        onChange={handleLocationChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        placeholder="Enter location"
                    />
                </div>


                <Container className="container">
                    <div className='land-list'> <LandList item={filteredLand} /></div>
                </Container>

                <div className='banner'><PostProperty /></div>
            </div>


        </Container>

    );
}
