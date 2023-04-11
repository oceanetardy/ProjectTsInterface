import {FC} from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {date} from "yup";

const FormTask:FC = () =>{
    interface FormValues {
        idUser: string;
        name: string;
        detail: string;
        statuts: string;
        // date: Date;

    }

    const initialValues: FormValues = {
        idUser: '',
        name: '',
        detail: '',
        statuts: '',
        // date: Date,

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
                <label htmlFor="idUser">Id User</label>
                <input type="text" id="idUser" name="idUser" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.idUser} />
                {formik.touched.idUser && formik.errors.idUser ? (
                    <div className="error">{formik.errors.idUser}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="name">Nom</label>
                <input type="text" id="lastName" name="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                {formik.touched.name && formik.errors.name ? (
                    <div className="error">{formik.errors.name}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="detail">Details</label>
                <input type="text" id="detail" name="detail" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.detail} />
                {formik.touched.detail && formik.errors.detail ? (
                    <div className="error">{formik.errors.detail}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="statuts">Statuts</label>
                <input type="text" id="statuts" name="statuts" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.statuts} />
                {formik.touched.statuts && formik.errors.statuts ? (
                    <div className="error">{formik.errors.statuts}</div>
                ) : null}
            </div>
            {/*<div>*/}
            {/*    <label htmlFor="date">date</label>*/}
            {/*    <input type="date" id="date" name="date" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.date} />*/}
            {/*    {formik.touched.date && formik.errors.date ? (*/}
            {/*        <div className="error">{formik.errors.date}</div>*/}
            {/*    ) : null}*/}
            {/*</div>*/}
            <button type="submit" disabled={!formik.isValid}>
                Envoyer
            </button>
        </form>
    );


}

export default FormTask;