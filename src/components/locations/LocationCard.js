import React from "react";

function LocationCard(props) {
  const location = props.Location;

  return (
    <div className="card vert">
      <div>
        <img
          src={`/images/locations/${location.id}.jpg`}
          alt={`${location.name}`}
        />
      </div>
      <h2>{location.name}</h2>
      <h3>{location.address}</h3>
      <h3>{location.phone}</h3>
    </div>
  );
}

export default LocationCard;
