import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

export default function UserPage(){
    const navigate = useNavigate()

    function exitLogin(){
        localStorage.removeItem("token")
        navigate("/login")
    }

    return(
        <>
        <div className="p-5">
            <div className="flex gap-10">
                <Button onClick={exitLogin}>Exit</Button>
                <Button onClick={exitLogin}>Exit</Button>
                <Button onClick={exitLogin}>Exit</Button>
                <Button onClick={exitLogin}>Exit</Button>
            </div>
        </div>
        </>
    )
}