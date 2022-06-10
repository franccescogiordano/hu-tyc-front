


const actGetTyc = ()=>async(dispatch)=>{
    try {   
        console.log("entre al getTyC")
        fetch('http://localhost:8080/api/TyC/obtenerElUltimo')
            .then(response => response.json())
            .then(data => dispatch({
                type: "getTyC", 
                payload:data 
            }));
    } catch (e) {
        console.log("error: ",e)
    }
}


const actCargarAceptacion = (tipoDocumentoX,numeroDoc,versionTyCX)=>async(dispatch)=>{
   
    try {
        const request = {
            tipoDocumento: tipoDocumentoX,
            numDoc: numeroDoc,
            versionTyC: versionTyCX,
        }
        console.log(request)
        console.log(JSON.stringify(request))
        fetch("http://localhost:8080/api/TyC/agregarAceptacion", {
            method: "POST",
            body: JSON.stringify(request),
            headers: { 
                "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(data => dispatch({
                type: "cargarTyCAccept",
                payload: data
            }));
    } catch(error) {
       dispatch({type: "cargarTyCAccept", payload:"error"});
    }
}

const actLimpiar = ()=>async(dispatch)=>{
    try {   
         dispatch({
                type: "limpiarTodo"
            });
    } catch (e) {
        console.log("error: ",e)
    }
}

export const action = ()=>{
    return{
        actGetTyc,
        actLimpiar,
        actCargarAceptacion,
    }
}