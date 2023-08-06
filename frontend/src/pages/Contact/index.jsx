import { useLocation, useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Contact = () => {
    const {state} = useLocation();
    const { name, phone_number, coordinates } = state; 
    const position = [coordinates.lat, coordinates.lng]

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    
    L.Marker.prototype.options.icon = DefaultIcon;

    return ( 
        <>
            <Nav tabs={[]}></Nav>
            <h1>Contact: {name}</h1>
            <p>Phone Number: {phone_number}</p>
            <h2>Location</h2>
            <div className="map" id="map" >
                <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>

     );
}
 
export default Contact;