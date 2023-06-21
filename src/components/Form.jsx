import { useState } from 'react'

const Form = ({add}) => {

 const [color, setColor] = useState("#f15025")

 const handleChange = (e) =>{
    setColor(e.target.value)
 }

 const handleSubmit = (e) =>{
    e.preventDefault()
    add(e.target[0].value)
    console.log(e.target[0].value)
 }

  return (
    <section className="container">
        <h4>Color Generator</h4>
        <form className='color-form' onSubmit={handleSubmit}>
            <input type="color" value={color} onChange={handleChange} />
            <input placeholder='#f15025' value={color} type="text" onChange={handleChange}  />
            <button className='btn' type='submit' style={{background: color}}>Submit</button>

        </form>
    </section>
  )
}

export default Form