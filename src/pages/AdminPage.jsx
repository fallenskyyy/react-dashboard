import Button from "../components/Button"
import { useNavigate } from "react-router-dom"
import TableRow from "../components/TableRow"
import { getData } from "../services/api"
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

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const loginData = Object.fromEntries(formData);
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
                <label htmlFor="role">User role:</label>
                <select name="role" id="">
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
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