import { Link } from "react-router-dom"

const SidebarLinks = ({ item }) => {
    return (
        <Link
            to={item.path}
            className=" flex items-center gap-2 font-light px-3 py-2 rounded-md text-base hover:bg-neutral-700 active:bg-neutral-600"
        >
            <span className=" w-5">{item.icon}</span>
            {item.label}
           
        </Link>
    )
}

export default SidebarLinks