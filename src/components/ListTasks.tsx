import React, {FC, useState, useEffect, Dispatch} from "react";
import Task from "../types/Task";
import {getTask} from "../services/task.service";
import {Link} from "react-router-dom";
import {IoPencilSharp} from "react-icons/io5";
import Button from 'react-bootstrap/Button';


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
                            <td>
                                <Link to ={'/tasks/' + val._id }>
                                    <Button variant="primary" className='iconButton'><IoPencilSharp /> Modifier la tâche</Button>
                                </Link>

                            </td>
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