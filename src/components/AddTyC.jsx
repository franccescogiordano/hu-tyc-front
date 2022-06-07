import React ,{ useState ,useEffect} from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useDispatch, useSelector } from "react-redux";
import { action } from "../actions/actTyc";
const AddTyC = () => {
    const [checked, setChecked] = React.useState(false);
    const [status, setStatus] = React.useState(true);
    const [documento, setDocumento] = useState("");
    const [tipoDocumento, setTicoDocumento] = useState("");
    const dispatch = useDispatch();
    const [statusCheckBox, setStatusCheckBox] = React.useState(false);
    let x=1;
    const { actCargarAceptacion, actGetTyc} = action();
    useEffect(() => {dispatch(actGetTyc());}, []);
    const cargarAcep =() => {
       dispatch(actCargarAceptacion(tipoDocumento,documento,tyc.version));
 
    }
    const {tyc} = useSelector(state => state.reducertyc);
    
    const onChangeHandler = () => {
        cargarAcep();
        setChecked(!checked);
        setStatusCheckBox(false)
      };
    
      let handleProdChange = (e) => {
        setTicoDocumento(e.target.value)
    }
  
    const funcionashe = () => {
        console.log("entre")
        setStatusCheckBox(true)
        console.log(statusCheckBox)
        setStatus(false)
    }
    return (<>
    <div className="container mx-auto px-4">
       <div className="w-full max-w-xs">
       <div className="mb-4">
            <label>Tipo Documento</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 white:bg-black-700 white:border-gray-600 white:placeholder-gray-400 white:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleProdChange}>
            <option value="tipoDocumento"> -- Seleccione Tipo documento -- </option>
            <option value="Cedula">Cedula</option>
            <option value="Pasaporte">Pasaporte</option>
            </select>
            </div>
            <div class="mb-6">
            <label>Documento</label>
            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="numDoc" type="text" placeholder="Numero Documento"  onChange={(ev) => setDocumento(ev.target.value)} />   
            
        </div>
        <div className=" appearance-none  border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer">
        <input
        type="checkbox"
        value={checked}
        disabled={!statusCheckBox}
        onChange={onChangeHandler}
        />
   {status && <Popup trigger={<button  disabled={!status} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Terminos y Condiones</button>} position="right center">
    <div><h2>
        {tyc.texto}
        <button disabled={!status} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() =>funcionashe()} >Aceptar</button>
        
        </h2>
    
        </div>
  </Popup>} 
    </div>
        </div></div>
    </>);
}

export default AddTyC;