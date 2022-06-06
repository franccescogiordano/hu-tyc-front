const initialState = {
    tyc: [],
    atyc:[],
    mensaje: [],
}

export const tycReducer = (state = initialState, action) => {
    console.log("tu vieja");
    switch (action.type) {
       
        case "getTyC":
            console.log("a",action.payload)
            return {
                ...state,
                tyc: action.payload
            }
        case "mensaje":
            return { ...state, mensaje: action.payload }
        case "cargarTyCAccept":
            //    console.log("payload carrito", action.payload)
                return { ...state, atyc: action.payload }
        default:
            return state;
    }
}
