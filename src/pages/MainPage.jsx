import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

export default function MainPage(){
    const navigate = useNavigate()

    function exitLogin(){
        localStorage.removeItem("token")
        navigate("/login")
    }

    return(
        <Button onClick={exitLogin}>Exit</Button>
    )
}