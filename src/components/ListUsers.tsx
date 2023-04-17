import React, {FC, useState, useEffect, Dispatch} from "react";
import User from "../types/User";
import {getUsers} from "../services/user.service";
import {IoEyeSharp, IoAddCircle} from 'react-icons/io5';

const  ListUsers: FC = ()=>{
    const [users, setUsers] = useState<User[]>([]);
    const [refresh] = useState(0);

    useEffect( ()=>{
        const getData = async ()=>{
            const users: User[] = await getUsers();
            console.log(users);
                setUsers(users);
        }
        getData();
    },[refresh]);

    return (
        <div>
            <h3>Liste des utilisateurs</h3>
            <table>
                <thead>
                <tr>
                    <th>NOM</th>
                    <th>EMAIL</th>
                    <th>ACTION</th>
                </tr>
                </thead>
                <tbody>
                {users.map((val, key)=>{
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td><button className='iconButton'><IoEyeSharp /></button><button className='iconButton'><IoAddCircle /></button></td>
                        </tr>
                    )}
                )}
                </tbody>


            </table>
        </div>

    )
}
export default ListUsers;