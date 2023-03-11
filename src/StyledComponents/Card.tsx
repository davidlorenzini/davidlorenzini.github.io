import { ReactElement } from "react"

interface props {
    children: ReactElement | ReactElement[] | string | number,
    className?: string
}

function Card({children, className}: props) {
    
    return (
        <div className={`
            dark:bg-neutral-700 
            rounded-lg 
            mt-3 
            px-5
            py-2
            justify-center
            ${className || ""}
        `}>
            {children}
        </div>
    )
  }
  
  export default Card;