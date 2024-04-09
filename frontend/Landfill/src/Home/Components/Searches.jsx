import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RecentSearches() {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/lands")
      .then((response) => {
        const data = response.data;
        console.log(data);
        // Set the lands array to state
        setLands(data.lands);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-5xl pt-3">Recent searches:</h1>
      <div>
        <ul>
          {lands.map((land) => (
            <li key={land._id}>
              <h2>{land.title}</h2>
              <p>Price: ${land.price}</p>
              <p>Description: {land.description}</p>
              <div>
                {/* Map over the images array */}
                {land.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={`Image ${index + 1}`}
                    width={350}
                    height={350}
                  />
                ))}
              </div>
              {/* Render other properties as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
