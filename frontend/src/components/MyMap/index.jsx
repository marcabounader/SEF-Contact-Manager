import L, { Map, marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import axios from 'axios';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MyMap = () => {
    const position=[];
    function LocationMarker(position) {
        const map = useMapEvents('click', () => {
          map.setView([position[0], position[1]], map.getZoom())
        })
        return null
      }
    Location(50.5, 30.5);
    return ( 
        <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>    </MapContainer>
     );
}
 
export default MyMap;