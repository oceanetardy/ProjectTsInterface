import React, {useEffect, useState} from "react";
import {getUsers} from "../services/user.service";
import Select from "react-select";

import User from "../types/User";


interface FormProps {
    onSubmit: (formData: FormData) => void;
    userId? : any
}


interface FormData {
    user: string;
    name: string;
    detail: string;
    status: any;
    date: number;
}


const FormTask = ({ onSubmit, userId }: FormProps) => {
    const [formData, setFormData] = useState<FormData>({
        user: userId ?? "",
        name: "",
        detail: "",
        status: "",
        date: Date.now()
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(userId)
        onSubmit(formData);
        setFormData({ user:"", name: "", detail: "", status: "", date: Date.now() });
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
                    value={formData.date}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Envoyer</button>
        </form>
    );


}

export default FormTask;