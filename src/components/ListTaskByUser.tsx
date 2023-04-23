import React, {FC, useState, useEffect, Dispatch} from "react";
import Task from "../types/Task";
import {getTask, getUserTasks} from "../services/task.service";
import user from "../pages/User";
import { useParams } from "react-router-dom";
import User from "../pages/User";
import 'bootstrap/dist/css/bootstrap.css';
import {createBootstrapComponent} from "react-bootstrap/ThemeProvider";

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