import {FC} from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {date} from "yup";

const FormUser:FC = () =>{
    interface FormValues {
        name: string;
        email: string;


    }

    const initialValues: FormValues = {
        name: '',
        email: ''

    };

    // const validationSchema = Yup.object({
    //     firstName: Yup.string().min(3,"La longueur minimale n'est pas respectée").required('Le prénom est requis'),
    //     lastName: Yup.string().required('Le nom de famille est requis'),
    //     email: Yup.string().email('Adresse email invalide').required('L\'adresse email est requise'),
    //     password: Yup.string().min(6, 'Le mot de passe doit comporter au moins 6 caractères').required('Le mot de passe est requis'),
    // });

    const onSubmit = (values: FormValues) => {
        console.log(values);
    };
    const formik = useFormik({
        initialValues,
        // validationSchema,
        onSubmit
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                {formik.touched.name && formik.errors.name ? (
                    <div className="error">{formik.errors.name}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                ) : null}
            </div>
            <button type="submit" disabled={!formik.isValid}>
                Envoyer
            </button>
        </form>
    );


}

export default FormUser;