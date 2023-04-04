// react router dom imports
import { Outlet } from "react-router-dom"

// components
import DashboardHeader from "../components/DashboardHeader"
import Sidebar from "../components/Sidebar"

const Dashboard = () => {
    return (
        <div className=" flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className=" bg-neutral-200 w-full">
                <DashboardHeader />
                <div className=" relative top-10">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard