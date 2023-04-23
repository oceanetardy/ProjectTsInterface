import React, {useEffect, useState} from "react";
import {getUsers} from "../services/user.service";
import Select from "react-select";

import User from "../types/User";
import tasks from "../pages/Tasks";
import Task from "../types/Task";


interface FormProps {
    onSubmit: (formData: FormData) => void;
    userId? : any;
    task? : Task | null;
}


interface FormData {
    _id? : string | null;
    user: string;
    name: string;
    detail: string;
    status: any;
    date: Date;
}


const FormTask = ({ onSubmit, userId , task}: FormProps) => {
    console.log(task);
    const [formData, setFormData] = useState<FormData>({
        _id: task? task._id : null,
        user: userId ?? "",
        name: task && task.name ? task.name : '',
        detail: task && task.detail ? task.detail : '',
        status: task && task.status ? task.status : '',
        date: task && task.date ? new Date(task.date) : new Date(),
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (event.target.name === 'date') {
            setFormData((prevFormData) => ({...prevFormData, [name]: new Date(event.target.value.toString())}));
        } else {
            setFormData((prevFormData) => ({...prevFormData, [name]: value}));
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(userId)
        onSubmit(formData);
        setFormData({ user:"", name: "", detail: "", status: "", date: new Date()});
    };






    return (
        <form onSubmit={handleSubmit}>

            <label>
                Name :
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Details :
                <input
                    type="text"
                    name="detail"
                    value={formData.detail}
                    onChange={handleChange}
                />
            </label>

            <label>
                Statut :
                <input
                    type="text"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                />
            </label>
            <label>
                Date :
                <input
                    type="date"
                    name="date"
                    value={new Date(formData.date).toISOString().split("T")[0]}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Envoyer</button>
        </form>
    );


}

export default FormTask;