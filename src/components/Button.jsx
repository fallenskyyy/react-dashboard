export default function Button({children, type = "button", onClick}){
    return(
        <button onClick={onClick} type={type} className="rounded-xl p-2 bg-green-300">{children}</button>
    )
}