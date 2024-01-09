// Import necessary components and styles
import React from "react";
import IntroSection from "./components/intro/Intro";
import ContactSection from "./components/contact-section/ContactSection";
import MapSection from "./components/map/Map";
import DisclaimerSection from "./components/disclaimer/Disclaimer";
import FooterSection from "./components/footer/Footer";
import "./App.css"; // Import styles for the App component

// Define the location object with address, latitude, and longitude
const location = {
  address: "GOMYCODE, No. 75 Aminu Kano Cresent, Wuse II, Abuja",
  lat: 9.07613,
  lng: 7.464157,
};

// App component that renders various sections of the application
const App = () => (
  // main container for the app
  <div className="App">
    <IntroSection />
    <ContactSection />
    <MapSection location={location} zoomLevel={17} />
    <DisclaimerSection />
    <FooterSection />
  </div>
);

export default App;
