import {FC, useState, useEffect, Dispatch} from "react";
import User from "../types/User";
import {getUsers} from "../services/user.service";

const  ListUsers: FC = ()=>{
    const [users, setUsers] = useState<User[]>([]);

    useEffect( ()=>{
        const getData = async ()=>{
            const response = await fetch('http://localhost:8080/users');
            const users:User[] = await response.json();
            console.log(users);
                setUsers(users);
        }
        getData();
    },[users]);

    return (
        <div>
            <h3>Liste Users</h3>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {users.map((val, key)=>{
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                        </tr>
                    )
                    }
                )}
            </table>
        </div>

    )
}
export default ListUsers;