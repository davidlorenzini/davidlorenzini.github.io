import { ReactElement, MouseEvent, useState } from "react"

interface props {
    children: ReactElement | ReactElement[] | string | number,
    className?: string,
    onClick?: (e: MouseEvent) => any
}

export default function Touchable({children, className, onClick}: props){
    const [pressed, setPressed] = useState(false) 
    return(
        <button className={`
            dark:bg-neutral-700 
            ${pressed ? "opacity-50": ""}
            rounded-lg 
            mt-3 
            px-5
            py-2
            ${className || ""}`}
            onClick={e => {
                onClick && onClick(e)
            }}
            onTouchStart={e => {
                // console.log("onTouchStart")
                setPressed(true)
            }}
            onTouchEnd={e => {
                // console.log("onTouchEnd")
                setPressed(false)
            }}
            onPointerDown={e => {
                // console.log("onPointerDown")
                setPressed(true)
            }}
            onPointerUp={e => {
                // console.log("onPointerUp")
                setPressed(false)
            }}
            style={{
                //Removes blue highlighting on press
                WebkitTapHighlightColor: "transparent"
            }}
        
        >
            <div
                className="
                content-center
                flex
                flex-row
                items-center
                "
            >
                {children}
            </div>
        </button>
    )
}