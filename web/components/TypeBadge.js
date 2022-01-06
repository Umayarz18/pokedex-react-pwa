export default function TypeBadge({ givenType }) {
    


    return (
        <li className={` rounded-md list-none text-center 
            font-medium p-1 w-1/3 capitalize border-t-2 border-b-4 type ${givenType}`}
            style={{
                
            }}>{givenType}</li>
    )
}