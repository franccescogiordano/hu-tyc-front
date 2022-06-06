import logo from './logo.svg';
import AddTyC from './components/AddTyC';
import React, { Component }  from 'react';
import { Provider } from "react-redux";
import { store} from "./store/store";
function App() {
  return (
    <Provider store={ store }>
     <AddTyC ></AddTyC>
  </Provider>
  );
}

export default App;
