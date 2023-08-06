import Nav from "../../components/Nav";
import L, { Map, marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import axios from 'axios';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
    const [data,setData]=useState({name:"",phone_number:"",lat:"",lng:""});
    const navigate=useNavigate();
    const [position,setPosition]=useState([51.505,-0.09]);
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    
    L.Marker.prototype.options.icon = DefaultIcon;

    const handleDataChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value});
        if(e.target.name=="lat" || e.target.name=="lng"){
            // setPosition([data.lat,data.lng])
            // let newLatLng = new L.LatLng(data.lat, data.lng);
            // marker.setLatLng(newLatLng); 
            // Map.setView(marker.getLatLng(),Map.getZoom()); 
        }
    }

    const handleAddition= async () =>{
        const config={
            headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
        };
        try{
            const response=await axios.post("http://localhost:8000/api/add-contact",data,config);
            if(response.data['status']=="success"){
                navigate(`/Contacts`)
            }
        }catch(e){
            console.log(e);
        }
    }
    const {name,phone_number,lat,lng}=data;

    // function MoveMarker() {
    //     const map = useMapEvents('', () => {
    //         map.setView([data.lat, data.lng], map.getZoom())
    //     })
    //     return null;
    //   }

    function LocationMarker() {
        const map = useMapEvents({
          click() {
            map.locate()
          },
          locationfound(e) {
            setData({...data,["lat"]:e.latlng.lat,["lng"]:e.latlng.lng});
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
          }
        })
        return position === null ? null : (
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        )
      }
    return ( 
        <>
        <Nav tabs={[]}></Nav>
            <section className="flex-row center full-height" >
                <div className="form-container flex-column p-10 m-10">
                    <h1>Add Contact</h1>
                    <form className="flex-column">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={name} placeholder="Name" onChange={handleDataChange}></input>
                        <label htmlFor="phone-number">Phone Number</label>
                        <input type="text" name="phone_number" id="phone-number" value={phone_number} placeholder="Phone number" onChange={handleDataChange}></input>
                        <label htmlFor="lat">Latitude</label>
                        <input type="text" name="lat" id="lat" value={lat} placeholder="Lat" onChange={handleDataChange}></input>
                        <label htmlFor="lng">Longitude</label>
                        <input type="text" name="lng" id="lng" value={lng} placeholder="Lng" onChange={handleDataChange}></input>
                    </form>      
                    <button id="btn-add" onClick={handleAddition}>Add</button>
                </div>
                <div className="map m-10">
                        <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LocationMarker />
                        </MapContainer>
                    </div>        
            </section>
        </>
     );
}
 
export default AddContact;

