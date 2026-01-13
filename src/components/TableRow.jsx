export default function TableRow({children, key, classes}){
    return(
        <div key={key} className={`w-full h-10 flex flex-row items-center justify-evenly ${classes}`}>{children}</div>
    )
}