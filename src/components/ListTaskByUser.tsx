import React, {FC, useState, useEffect, Dispatch} from "react";
import Task from "../types/Task";
import {getTask, getTaskByUserId} from "../services/task.service";
import user from "../pages/User";
import { useParams } from "react-router-dom";

const  ListTasksByUser: FC = ()=>{
    const {id} = useParams();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [refresh] = useState(0);


    useEffect( ()=>{
        const getData = async ()=>{
            const tasks: Task[] = await getTaskByUserId();
            //TODO Récupérer les taches pourtant bien envoyé côté API
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
                                <td>{val.idUser}</td>
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