import { getData } from "../services/api";
import { useState, useEffect } from "react";
import TableRow from "./TableRow";
import Skeleton from "./Skeleton";

export default function UsersRow(){
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    let list = []

    function getUsers(){
        getData().then(users => {
        setUsers(users)
        setLoading(false)
    })}
    
    useEffect(() => {
        getUsers()
    }, []);

  if (loading) {
    return (
      <>
        { [1, 2].map((n) => (
          <tr key={n}>
            <td colSpan="3" className="border border-gray-400 p-2">
              <Skeleton />
            </td>
          </tr>
        ))}
      </>
    );
  }

  return (
    <>
      {users.map((user) => (
        <tr key={user.email}>
          <td className="border border-gray-400 p-2">{user.email}</td>
          <td className="border border-gray-400 p-2">{user.password}</td>
          <td className="border border-gray-400 p-2">{user.isAdmin ? "Admin" : "User"}</td>
        </tr>
      ))}
    </>
  );
}
