import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import AddTyC from './AddTyC';
import { Provider } from "react-redux";
import { store} from "../store/store";
test('renders content',() => {
const addTyC={
    content:'Tipo Documento',
    important: true    
}

const component= render(   <Provider store={ store }>
    <AddTyC ></AddTyC>
 </Provider>);
component.getByText('Tipo Documento')
expect(component.container)
.toHaveTextContent(addTyC.content)//component.getByText('make not important')
})
