import { useLocation, useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';


const Contact = () => {
    const {id}=useParams();
    const {state} = useLocation();
    const { name, phone_number, coordinates } = state; 
    const position = [51.505, -0.09]

    return ( 
        <>
            <Nav tabs={[]}></Nav>
            <h1>Contact: {name}</h1>
            <p>Phone Number: {phone_number}</p>
            <h2>Location</h2>
            <div className="map" id="map" >
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
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