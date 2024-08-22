import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const GeographicalDistribution = ({ customers }) => {
  // Check if customers data is available and not empty
  if (!customers || customers.length === 0) {
    return <div>No customer data available.</div>; // Handle empty data
  }

  return (
    <div style={{ height: '60vh', width: '100%', margin: '20px 0' }}>
      <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {customers.map((customer, index) => (
          <Marker key={index} position={[customer.latitude, customer.longitude]}>
            <Popup>
              {customer.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default GeographicalDistribution;
