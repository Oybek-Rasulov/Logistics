import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
  { id: 1, name: "Location A", lat: 41.8839, lng: -87.6324 },
  { id: 2, name: "Location B", lat: 42.0334, lng: -88.0834 },
  { id: 3, name: "Location C", lat: 41.7508, lng: -88.1535 },
  { id: 4, name: "Location F", lat: 41.5250, lng: -88.0817 },
  { id: 5, name: "Location D", lat: 42.0451, lng: -87.6877 },
];

const MapComponent = () => {
  return (
    <MapContainer center={[41.8476, -87.9277]} zoom={9} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
