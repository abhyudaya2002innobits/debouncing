import { useRef, useState } from "react"

const Demo=()=>{
    const[text,setText]=useState()
    const val=useRef()
    const handleChange=((e)=>{
        setText(e.target.value)
        console.log('Rendring.....')
    })
   

    return (
        <div className="box-demo">
            <input type="number" 
            placeholder="enter text"
            // value={text}
            ref={val}
            onChange={handleChange}
            // value={}
            />
            
            <h1>{text}</h1>
            <button>

            </button>
        
        </div>

    )
}

export default Demo