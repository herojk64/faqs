import { useEffect, useState } from "react"
import Plus from '../assets/images/icon-plus.svg'
import Minus from '../assets/images/icon-minus.svg'

interface propsInterface{
    header:string,
    answer:string,
    default:boolean
}

const Dropdown = (props:propsInterface) => {
    const {header,answer} = props;

    const [dropdown,setDropdown] = useState<boolean>(props.default);
    
    useEffect(()=>{

    },[])

    return (
        <section>
            <header className="text-Dark-purple font-semibold flex justify-between items-center" onClick={()=>setDropdown((e)=>!e)}>
                {header}
                <img src={dropdown?Minus:Plus} className="h-6 w-6"/>
            </header>
            {
            dropdown && 
            <p className="mt-2 text-grayish-purple">{answer}</p>
            }
        </section>
    )
}

export default Dropdown