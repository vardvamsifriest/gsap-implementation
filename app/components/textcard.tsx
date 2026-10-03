
interface cardprops {
    "color":"yellow"|"grey"|"orange"|"blue",
    "title":string,
    "description":string
}
const colorStyles = {
    "yellow":"bg-yellow-200 text-black",
    "grey":"bg-slate-400 text-slate-100",
    "orange":"bg-orange-400 text-black",
    "blue":"bg-blue-400 text-black"
}
export function TextCard(props:cardprops)
{
    return (
        <div className={`${colorStyles[props.color]} min-h-30 w-70 rounded-md shadow-lg`}>
            <div className="flex justify-center pt-4">
                <p className="text-6xl font-bold">
                    {props.title}
                </p>
            </div>
            <div className="flex justify-center p-4">
                <p className="text-xl">
                {props.description}
                </p>
            </div>
        </div>
    )
}