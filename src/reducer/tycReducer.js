const initialState = {
    tyc: [],
    atyc:[],
    mensaje: [],
}

export const tycReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case "getTyC":
            console.log("tyc:", action.payload);
          //  console.log("a",action.payload)
            return {
                ...state,
                tyc: action.payload
            }
        case "mensaje":
            return { ...state, mensaje: action.payload }
        case "cargarTyCAccept":
             //  console.log("payload carrito", action.payload)
                return { ...state, atyc: action.payload }
        case "limpiarTodo":
                    //  console.log("payload carrito", action.payload)
                       return { ...state, atyc: ""}        
        default:
            return state;
    }
}
