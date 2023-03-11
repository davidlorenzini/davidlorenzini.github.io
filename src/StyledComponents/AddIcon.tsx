import { ReactElement } from "react"

interface props {
    dimension?: number,
}

export default function AddIcon({dimension}: props){
    const dim = dimension === undefined ? 20: dimension
    return(
        <div
            className="
                dark:bg-neutral-500
                rounded-full
                flex
                flex-col
                h-full
                items-stretch
                mr-1
            "
            style={{
                "width": dim + "px",
                "height": dim + "px"
            }}
        >
            <p
                className="
                    justify-center
                    content-center
                    text-center
                    align-middle
                    p-0
                    m-0
                    leading-none
                    text-base
                    font-sans
                    font-normal
                    text-neutral-300
                "
                style={{
                    "width": dim + "px",
                    "height": dim + "px"
                }}
            >+</p>
        </div>
    )
}