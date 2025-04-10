import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const mapContainerStyle = {
    width: '100%',
    height: '300px',
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
                <Marker position={mapCenter} />
            </GoogleMap>
        </LoadScript>
    )
}
