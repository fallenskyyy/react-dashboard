import { getData, writeData } from "../services/api";
import { useState, useEffect } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function UsersRow(){
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    function getUsers(){
        getData().then(users => {
        setUsers(users)
        setLoading(false)
    })}

  function handleDelete(email) {
    const updatedUsers = users.filter(user => user.email !== email);
    setUsers(updatedUsers);
    writeData(updatedUsers);
  }
    
    useEffect(() => {
        getUsers()
    }, []);

  if (loading) {
    return (
      <>
        { [1].map((n) => (
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
          <td className="pl-3"><Button onClick={() => handleDelete(user.email)}>Delete user</Button></td>
        </tr>
      ))}
    </>
  );
}
