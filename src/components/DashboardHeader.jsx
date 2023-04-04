// icons
import { BellIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/solid"

const DashboardHeader = () => {
  return (
    <div className="bg-white p-2 shadow-lg fixed w-full flex">
      
      <BellIcon width={20} color="" />
      <ChatBubbleLeftIcon width={20} />
    </div>
  )
}

export default DashboardHeader