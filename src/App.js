import logo from './logo.svg';
import './App.css'

import { createContext, useState } from 'react';
import Navbar from './components/Navbar';
export const myContext = createContext()


function App() {
  const[bgColor,setBgColor] = useState('black')
  const[color,setColor] = useState('white')

  const btnClicked = () => {
    if(bgColor=='black'){
      setBgColor('white')
      setColor('black')
    }
    else{
      setBgColor('black')
      setColor('white')
    }
  }
  return (
    <myContext.Provider value={{bgColor,color,btnClicked}} >
     <Navbar/>
    </myContext.Provider>
  );
}

export default App;
