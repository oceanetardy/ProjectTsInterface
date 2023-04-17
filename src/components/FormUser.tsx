import {useFormik} from "formik";
import * as Yup from 'yup';
import React, {useState} from "react";

interface FormProps {
    onSubmit: (formData: FormData) => void;
}


interface FormData {
    name: string;
    email: string;
}

const FormUser = ({ onSubmit }: FormProps) => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log(value);
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formData);
        setFormData({ name: "", email: "" });
    };
    interface FormValues {
        name: string;
        email: string;


    }

    const initialValues: FormValues = {
        name: '',
        email: ''

    };

    const validationSchema = Yup.object({
        name: Yup.string().min(3,"La longueur minimale n'est pas respectée").required('Le prénom est requis'),
        email: Yup.string().email('Adresse email invalide').required('L\'adresse email est requise'),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });
    // return (
    //     <form onSubmit={formik.handleSubmit}>
    //         <div>
    //             <label htmlFor="name">Name</label>
    //             <input type="text" id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
    //             {formik.touched.name && formik.errors.name ? (
    //                 <div className="error">{formik.errors.name}</div>
    //             ) : null}
    //         </div>
    //         <div>
    //             <label htmlFor="email">Email</label>
    //             <input type="text" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
    //             {formik.touched.email && formik.errors.email ? (
    //                 <div className="error">{formik.errors.email}</div>
    //             ) : null}
    //         </div>
    //         <button type="submit" disabled={!formik.isValid}>
    //             Envoyer
    //         </button>
    //     </form>
    // );
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>

            <label>
                Email :
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Envoyer</button>
        </form>
    );


}

export default FormUser;