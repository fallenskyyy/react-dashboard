import Button from "../components/Button"
import { useNavigate } from "react-router-dom"
import TableRow from "../components/TableRow"
import { getData, writeData } from "../services/api"
import { useEffect, useState } from "react"
import UsersRow from "../components/UsersRow"

export default function MainPage(){
    const navigate = useNavigate()
    const [Users, SetUsers] = useState([])

    function exitLogin(){
        localStorage.removeItem("token")
        localStorage.removeItem("userRole")
        localStorage.removeItem("userEmail")
        navigate("/login")
    }

    function addUser(email, password, role){
        if (role == "Admin"){
            role = true
        }
        else{
            role = false
        }
        SetUsers(Users.push (
                {
                    email: email,
                    password: password,
                    isAdmin: role
                }))
        writeData(Users)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newUserData = Object.fromEntries(formData);
        addUser(newUserData.email, newUserData.password, newUserData.role)
    }

    function getUsers(){
        getData().then(users => {
            SetUsers(users)
        })}

    useEffect(() => {
        getUsers()
    }, []);

    console.log(Users);
    return(
        <>
        <div className="p-5 flex justify-between items-center">
            <form onSubmit={handleSubmit} className="flex gap-5 items-center" action="">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <label htmlFor="role">User role:</label>
                <select name="role" id="">
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
                <Button type="submit">Add User</Button>
            </form>
            <Button onClick={exitLogin}>Exit</Button>
        </div>
        <div className="flex justify-center w-full">
            <table className="w-[95%]">
                <thead>
                    <tr className="bg-gray-300 text-center">
                        <th className="p-2">User email</th>
                        <th className="p-2">User password</th>
                        <th className="p-2">User role</th>
                        <th className="p-2">Actions:</th>
                    </tr>
                </thead>
                <tbody>
                    <UsersRow />
                </tbody>
            </table>
        </div>
        </>
    )
}