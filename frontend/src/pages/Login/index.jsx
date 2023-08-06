// import axios from 'axios';

import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const tabs=["register"];
    const [data,setData]=useState({email:"",password:""});

    const navigate=useNavigate();
    const handleDataChange = (e) =>{
        setData({...data,[e.target.id]:e.target.value});
    }
    const handleLogin= async () =>{
        try{
            const response=await axios.post("http://localhost:8000/api/login",data);
            if(response.data['status']=="success"){
                localStorage.setItem('name',response.data['name']);

                localStorage.setItem('token',response.data['token']);
                navigate(`/Contacts`)
            }
        }catch(e){
            console.log(e);
        }
    }
    const {email,password} =data;
    return ( 
        <>
        <section className="flex-column center full-height" >
            <div className="form-container flex-column p-10">
                <h1>Login</h1>
                <form className="flex-column">
                <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={email} placeholder="Email" onChange={handleDataChange}></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} placeholder="password" onChange={handleDataChange}></input>
                </form>
                <button id="btn-login" onClick={handleLogin}>Sign In</button>
            </div>

        </section>
        </>

     );
}
 
export default Login;