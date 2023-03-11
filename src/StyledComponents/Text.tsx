interface props {
    children: string | number,
    className?: string
}

export default function Text({children, className}: props){
    return(
        <p className={`
            text-base
            font-sans
            font-normal
            text-neutral-300
            align-middle
            ${className || ""}
        `}>
            {children}
        </p>
    )
}