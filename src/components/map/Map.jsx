// Import necessary libraries and styles
import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker"; // Import the map-marker icon

// LocationPin component for displaying a pin on the map
const LocationPin = ({ text }) => (
  <div className="pin">
    {/* Container for the pin */}
    <Icon icon={locationIcon} className="pin-icon" />{" "}
    {/* Display the location icon */}
    <p className="pin-text">{text}</p> {/* Display the text (address) */}
  </div>
);

// Map component to display Google Maps with specified location and zoom level
const Map = ({ location, zoomLevel }) => {
  const apiKey = process.env.REACT_APP_API_KEY; // Retrieve API key from environment variables

  return (
    <div className="map">
      {" "}
      {/* Main container for the Map */}
      <h2 className="map-h2">Come Take a Look at What We Offer</h2>
      {/* Header for the Map section */}
      <div className="google-map">
        {" "}
        {/* Container for the Google Map */}
        {/* GoogleMapReact component to display the map */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }} // Set API key for Google Maps
          defaultCenter={location} // Set the default center of the map to the provided location
          defaultZoom={zoomLevel} // Set the default zoom level of the map
        >
          {/* Display the LocationPin component at the specified latitude and longitude */}
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map; // Export the Map component as default
