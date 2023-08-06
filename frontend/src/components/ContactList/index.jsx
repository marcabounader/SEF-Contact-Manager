import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ContactList = () => {
    const [contacts,setContacts]=useState([]);
    const fetchContacts=( async ()=>{
        const config={
            headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
        };
        try{
            const response=await axios.get("http://localhost:8000/api/get-contacts",config);
            console.log(contacts);
            setContacts(response.data.contacts);
        }catch(e){
            console.log(e);
        }
    })

    const removeContact = async (contact_id)=>{
        const config={
            headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
        };
        try{
            const response=await axios.delete(`http://localhost:8000/api/remove-contact/${contact_id}`,config);
            const new_contacts=contacts.filter((contact)=>contact.id!=contact_id);
            setContacts(new_contacts)
        }catch(e){
            console.log(e);
        }
    };
    const navigate=useNavigate();
    const navigation=(id,name,phone_number,coordinates)=>{
        navigate(`${id}`,{ state: { "name":name, "phone_number":phone_number,"coordinates":coordinates} })
    }
    useEffect( ()=>{
        fetchContacts();
    },[]);
    console.log(contacts);
    return ( 
        <div className='flex-row wrap cards'>
            {contacts != "" ? contacts.map((contact)=>(
                <div className="card m-10" key={contact.id}>
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar"/>
                    <div className="container flex-column start">
                        <h4><b>{contact.name}</b></h4>
                        <p>Phone number: {contact.phone_number}</p>
                    </div>
                    <div className="flex-row around">
                        <i class="fa-solid fa-location-crosshairs" onClick={()=> navigation(contact.id,contact.name,contact.phone_number,contact.coordinates)}></i>
                        <i class="fa-solid fa-trash" onClick={()=>removeContact(contact.id)}></i>

                    </div>
                </div>
            )): null}
        </div>
     );
}
 
export default ContactList;