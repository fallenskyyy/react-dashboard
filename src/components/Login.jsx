import Button from "./Button"
import { getData } from "../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
        navigate("/dashboard");
    }
    }, []);

    function handleLogin(email, password){
        getData().then((response) => {
            if(response.email == email && response.password == password){
                localStorage.setItem("token", "mock-token")
                navigate("/dashboard")
            }
            else{
                alert("invalid data")
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target)
        const loginData = Object.fromEntries(formData)
        handleLogin(loginData.email, loginData.password)
    }

    return(
        <>
        <div className="shadow rounded w-100 h-100 p-5 flex justify-center items-center flex-col">
            <h1 className="text-4xl mb-10">Welcome</h1>
            <form onSubmit={handleSubmit} action="" className="flex flex-col">
                <label htmlFor="email">E-mail</label>
                <input required type="text" name="email" />
                <label htmlFor="password">Password</label>
                <input required className="mb-5" type="text" name="password"/>
                <Button type={"submit"}>Login</Button>
            </form>
        </div>
        </>
    )
}