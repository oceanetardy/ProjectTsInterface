import React, {FC, useState, useEffect, Dispatch} from "react";
import Task from "../types/Task";
import {getUserTasks} from "../services/task.service";
import 'bootstrap/dist/css/bootstrap.css';


interface Props {
    id: any;
}

const ListTasksByUser:FC<Props> = ({id}: Props) =>{
    const [tasks, setTasks] = useState<Task[]>([]);
    const [refresh] = useState(0);


    useEffect( ()=>{
        const getData = async (id : any)=>{
            const tasks: Task[] = await getUserTasks(id);
            console.log(tasks);
            setTasks(tasks);
        }
        getData(id);
    },[refresh]);

    return (
        <div>

            <table>
                <thead>
                <tr>
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
export default ListTasksByUser;