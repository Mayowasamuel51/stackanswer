// rrd imports
import { Link } from 'react-router-dom'

import { DASHBOARD_LINKS } from '../utilities/navigation'
import SidebarLinks from './SidebarLinks'

// assets
import logo from '../assests/vite.svg'


const Sidebar = () => {
  return (
    <div className=' bg-neutral-900 w-60 p-3 flex flex-col text-white'>

      {/* logo */}
      <Link
        className=" flex items-center gap-x-4 pb-4"
        to="/"
      >
        {/* <img src={logo} alt="" className=" pl-4" /> */}
        <span className='font-medium'>Codar-Dev-Hub</span>
      </Link>

      <hr />

      {/* links */}
      <div className="flex-1 flex flex-col gap-0.5 py-4">
        {DASHBOARD_LINKS.map((item) => (
          <SidebarLinks key={item.key} item={item} />
        ))}
      </div>

    </div>
  )
}

export default Sidebar