import React, {FC, useState, useEffect, Dispatch} from "react";
import Task from "../types/Task";
import {getTask} from "../services/task.service";

const  ListTasks: FC = ()=>{
    const [tasks, setTasks] = useState<Task[]>([]);
    const [refresh] = useState(0);


    useEffect( ()=>{
        const getData = async ()=>{
            const tasks: Task[] = await getTask();
            console.log(tasks);
            setTasks(tasks);
        }
        getData();
    },[refresh]);

    return (
        <div>
            <h3>Liste des tâches</h3>
            <table>
                <thead>
                <tr>
                    <th>ID USER</th>
                    <th>NAME</th>
                    <th>DETAIL</th>
                    <th>STATUT</th>
                    <th>DATE</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((val, key)=>{
                    return (
                        <tr key={key}>
                            <td>{val.user}</td>
                            <td>{val.name}</td>
                            <td>{val.detail}</td>
                            <td>{val.status}</td>
                            <td>{val.date}</td>
                        </tr>
                    )
                    }
                )}
                </tbody>

            </table>
        </div>

    )
}
export default ListTasks;