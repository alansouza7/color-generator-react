import { useState } from 'react'
import Form from './components/Form'
import ColorList from './components/ColorList'
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

import './App.css'

function App() {

 const [colors, setColors] = useState(new Values('#f15025').all(10))

  const addColor = (color) => {
    if(color === undefined) {
      toast.error("Values doesn't exist!")
    } else {
      setColors(new Values(color).all(10))
    }
    
  }

  return (
    <main>
      <Form add={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center'/>
    </main>
  )
}

export default App
