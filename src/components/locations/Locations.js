import React, { useState, useEffect } from "react";
import APIManager from "../../modules/APIManager";
import LocationCard from "./LocationCard";

function Locations(props) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    APIManager.getResource("locations").then(setLocations);
  }, []);

  return (
    <>
      <header>
        <h1>Locations</h1>
      </header>
      <div className="card_container horz">
        {locations.map((location) => (
          // have to initial cap location prop as props also includes location property
          <LocationCard key={location.id} Location={location} {...props} />
        ))}
      </div>
    </>
  );
}

export default Locations;
