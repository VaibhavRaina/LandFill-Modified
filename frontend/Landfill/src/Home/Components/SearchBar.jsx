import React, { useState } from "react";
import { useGeolocated } from "react-geolocated";
import TopBar from "./Header";
import Footer from "./Footer";

const SearchBar = () => {
  const [location, setLocation] = useState(null);
  const [query, setQuery] = useState("");
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated();

  const handleGeolocation = () => {
    if (isGeolocationAvailable && isGeolocationEnabled) {
      setLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    } else {
      console.log("Geolocation is not available or not enabled.");
    }
  };

  const handleSubmit = () => {
    // Filter the search results based on the user's location and search query.
  };

  return (
    <div>
      <button onClick={handleGeolocation}></button>
      <input
        type="text"
        placeholder="Enter city you want land at..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[450px] h-18 p-2 border-2 border-green-500 rounded-3xl"
      />
      <button
        onClick={handleSubmit}
        className="border-1 border bg-green-500 rounded-3xl w-20 h-10 text-white"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
