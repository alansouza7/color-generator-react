import { ToastContainer, toast } from 'react-toastify';


const SingleColor = ({color, index}) => {
    
    const {weight, hex} = color

    const saveToClipboard = ()=>{
       navigator.clipboard.writeText(`#${hex}`) 
       toast.success("Color copied to clipboard")
    }


  return (
    <article onClick={saveToClipboard} className={index > 10? 'color-light color': 'color'} style={{background:`#${hex}`}}>
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hex}</p>
    </article>
  )
}

export default SingleColor