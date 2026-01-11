import Button from "./Button"
import { getData } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
    const navigate = useNavigate()

    function handleLogin(email, password) {
        getData().then((users) => {
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                localStorage.setItem("token", "mock-token");
                localStorage.setItem("userRole", user.isAdmin ? "admin" : "user");                
                if(user.isAdmin) {
                    navigate("/admin-dashboard");
                } else {
                    navigate("/user-dashboard");
                }
            } else {
                alert("Invalid email or password");
            }
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const loginData = Object.fromEntries(formData);
        handleLogin(loginData.email, loginData.password);
    }

    return (
        <div className="shadow bg-white rounded w-100 h-100 p-5 flex justify-center items-center flex-col">
            <h1 className="text-4xl mb-10">Welcome</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="email">E-mail</label>
                <input required type="text" name="email" />
                <label htmlFor="password">Password</label>
                <input required className="mb-5" type="password" name="password"/>
                <Button type={"submit"}>Login</Button>
            </form>
        </div>
    );
}