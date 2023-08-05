import Nav from "../../components/Nav";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const tabs=["login"];
    const [data,setData]=useState({name:"",email:"",password:""});

    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate(`/login`)
    }
    
    const handleDataChange = (e) =>{
        setData({...data,[e.target.id]:e.target.value});
    }

    const handleRegister= async () =>{
        try{
            const response=await axios.post("http://localhost:8000/api/register",data);
            if(response.data['status']=='success'){
                navigate(`/login`)
            }
        }catch(e){
            console.log(e);
        }
    }
    const {name,email,password} =data;
        return ( 
        <>
        <Nav tabs={tabs}></Nav>
        <section className="flex-column center full-height" >
            <div className="form-container flex-column p-10">
                <h1>Register</h1>
                <form className="flex-column between">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" defaultValue={name} placeholder="Name" onChange={handleDataChange}></input>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" defaultValue={email} placeholder="Email" onChange={handleDataChange}></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" defaultValue={password} placeholder="password" onChange={handleDataChange}></input>
                </form>
                <button id="btn-login" onClick={handleRegister}>Add user</button>
            </div>

        </section>
        </>
     );
}
 
export default Register;