import SingleColor from "./SingleColor"
import {v4 as uuidv4} from 'uuid'

const ColorList = ({colors}) => {

  return (
    <section className="colors">
    {colors.map((color, index) =>{
      return <SingleColor color={color} key={uuidv4()} index={index} />
    })}    


    </section>
  )
}

export default ColorList