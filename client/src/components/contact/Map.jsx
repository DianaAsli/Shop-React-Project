import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const mapContainerStyle = {
    width: '50%',
    height: '200px',
}
const mapCenter = {
    lat: 42.6977,
    lng: 23.3219
}

const zoom = 12;

export default function Map() {

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
   
    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={mapCenter}
                zoom={zoom}
            >
                <Marker position={mapCenter || center} />
            </GoogleMap>
        </LoadScript>
    )
}

// import React, { useEffect, useRef } from 'react';

// export default Map = ({ center = {lat: 42.6977, lng: 23.3219}, zoom=12 }) => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (mapRef.current) {
//       const map = new window.google.maps.Map(mapRef.current, {
//         center,
//         zoom,
//       });
//       new window.google.maps.Marker({
//         position: center,
//         map: map,
//       });
//     }
//   }, [center, zoom]);

//   return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
// };

