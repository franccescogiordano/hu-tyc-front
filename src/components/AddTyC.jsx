import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import * as Yup from "yup";
import 'reactjs-popup/dist/index.css';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { action } from "../actions/actTyc";


const AddTyC = () => {
const validateCedula = (value) => {
    dispatch(actLimpiar());
    const regex =
        /[0-9]{2}-PN-[0-9]{3}-[0-9]{4}/;
    
        if(regex.test(value.replace(/\s/g,""))){
            setStatus2(true);     
        }else{
            setStatus2(false); 
        }

    return regex.test(value.replace(/\s/g, ""))
        ? undefined
        : "El formato del número de cedula es incorrecto";
};
//{tipoDocumento==='Cedula' ? validateCedula : validatePasaporte}
const validatePasaporte = (value) => {
    if(value.length > 16){
        return "Demasiado largo :("
    }
    const regex =
        /^[a-zA-Z0-9-]{5,16}$/;
    return regex.test(value.replace(/\s/g, ""))
        ? undefined
        : "El formato del número de cedula es incorrecto";
};
const userSchema = Yup.object().shape({
    documento: Yup.string()
        .required("Campo obligatorio"),
    validar: Yup.boolean()
});


    const [checked, setChecked] = React.useState(false);
    const [status, setStatus] = React.useState(true);
    const [status2, setStatus2] = React.useState(false);
    const [documento, setDocumento] = useState("");

    const [tipoDocumento, setTicoDocumento] = useState("");
    const dispatch = useDispatch();
    const [statusCheckBox, setStatusCheckBox] = React.useState(false);
    const { actCargarAceptacion, actGetTyc,actLimpiar } = action();

    useEffect(() => { dispatch(actGetTyc()); }, []);

    const cargarAcep = () => {
        dispatch(actCargarAceptacion(tipoDocumento, documento, tyc.version));
      //  console.log("a ver:", atyc)

    }
    const { tyc, atyc } = useSelector(state => state.reducertyc);

    const onChangeHandler = () => {
        cargarAcep();
        setChecked(!checked);
        setStatusCheckBox(false)
    };

    let handleProdChange = (e) => {
        setTicoDocumento(e.target.value)
    }

  
    const funcionashe = (values) => {
       // console.log("entre,",values)
        setStatusCheckBox(true)
        console.log(statusCheckBox)
        setStatus(false)
    }
    return (<>
        <div className="container mx-auto px-4 justify-center w-full max-w-xs">
            <div className="w-full max-w-xs  my-100">
                <div className="mb-4">
                    <label>Tipo Documento</label>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 white:bg-black-700 white:border-gray-600 white:placeholder-gray-400 white:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleProdChange}>
                        <option value="tipoDocumento"> -- Seleccione Tipo documento -- </option>
                        <option value="Cedula">Cedula</option>
                        <option value="Pasaporte">Pasaporte</option>
                    </select>
                </div>
                <div className="mb-6">
                    <Formik
                        initialValues={{
                            documento: '',
                            validar: false,
                        }}
                        validationSchema={userSchema}

                        onSubmit={
                            (values) => {
                                setDocumento(values.documento);
                            }
                        }
                    >
                        {({ errors, touched }) => (
                            <Form>

                                <label htmlFor="documento">Numero Doc</label>
                                <Field
                                    id="documento"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 white:bg-black-700 white:border-gray-600 white:placeholder-gray-400 white:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="documento"
                                    type="text"
                                    validate={ tipoDocumento==='Cedula' ? validateCedula : validatePasaporte }
                                />
                                {errors.documento && touched.documento ? (
                                    <div className="m-4 row justify-center">{errors.documento}</div>
                                ) : null}
                                <div className="mb-6">
                                    <Field
                                        type="checkbox"
                                        name="validar"
                                        checked={checked}
                                        value={checked}
                                        disabled={!statusCheckBox}
                                        onChange={onChangeHandler}
                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    />
                                    {status && <Popup trigger={<button disabled={!status} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Terminos y Condiones</button>} position="right center">
                                        <div><h2>
                                            {tyc.texto}
                                            <button disabled={!status2} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                            " onClick={() => funcionashe()} >Aceptar</button>

                                        </h2>

                                        </div>
                                    </Popup>}
                                </div>
                            </Form>
                        )}
                    </Formik>
                     {atyc && atyc.resultado!=="" ? (
                                    <div className="m-4 row justify-center">{atyc.resultado}</div>
                                ) : null}
                </div>

            </div></div>
    </>);
}

export default AddTyC;