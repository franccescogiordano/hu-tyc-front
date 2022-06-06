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
    const [status2, setStatus2] = React.useState(false);
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
        setStatus(false);
      };
    let handleProdChange = (e) => {
        setTicoDocumento(e.target.value)
    }
  
    const funcionashe = () => {
        setStatus2(true)
        setStatus(false)
    }
    return (<>
        <div>
            <h1 className="bg-blue-500">HELLO WORLD</h1>
            <label>Tipo Documento</label>
            <select onChange={handleProdChange}>
            <option value="tipoDocumento"> -- Seleccione Tipo documento -- </option>
            <option value="Cedula">Cedula</option>
            <option value="Pasaporte">Pasaporte</option>
            </select>
            <label>Documento</label>
            <input type="text" onChange={(ev) => setDocumento(ev.target.value)} />   
            <input
        type="checkbox"
        value={checked}
        disabled={!status2}
        onChange={onChangeHandler}
      />
    <Popup trigger={<button  disabled={!status} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Terminos y Condiones</button>} position="right center">
    <div><h2>
        {tyc.texto}
        <button onClick={()=>funcionashe()} >Cerrar</button>
        </h2></div>
  </Popup>

        </div>
    </>);
}

export default AddTyC;