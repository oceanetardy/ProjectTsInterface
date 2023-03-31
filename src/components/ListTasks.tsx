import React, {FC, useState, useEffect, Dispatch} from "react";
import Task from "../types/Task";

const  ListTasks: FC = ()=>{
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect( ()=>{
        const getData = async ()=>{
            const response = await fetch('http://localhost:8080/tasks');
            const tasks:Task[] = await response.json();
            console.log(tasks);
                setTasks(tasks);
        }
        getData();
    },[tasks]);

    return (
        <div>
            <h3>Liste des tâches</h3>
            <table>
                <tr>
                    <th>ID USER</th>
                    <th>NAME</th>
                    <th>DETAIL</th>
                    <th>STATUT</th>
                    <th>DATE</th>


                </tr>
                {tasks.map((val, key)=>{
                    return (
                        <tr key={key}>
                            <td>{val.idUser}</td>
                            <td>{val.name}</td>
                            <td>{val.detail}</td>
                            <td>{val.status}</td>
                            {/*<td>{val.date}</td>*/}



                        </tr>
                    )
                    }
                )}
            </table>
        </div>

    )
}
export default ListTasks;