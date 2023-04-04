// rrd imports
import { Link } from 'react-router-dom'

// assests
import illustration from '../assests/illustration.jpg'
import logo from '../assests/vite.svg';

const Login = () => {
  return (
    <div className=' max-w-screen-lg mx-auto'>

        <nav className=' flex items-center justify-between py-8'>
          {/* logo */}
          <div>
            <Link>
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className=' flex items-center gap-x-5'>
            <Link
              to="dashboard"
              className=' py-2 px-3 hover:bg-slate-200 hover:rounded-md'
            >
              Dashboard
            </Link>
            <Link
            to="dashboard"
            className=' py-2 px-3 hover:bg-slate-200 hover:rounded-md'
            >
              About
            </Link>
            <Link
            to="dashboard"
            className=' py-2 px-3 hover:bg-slate-200 hover:rounded-md'
            >
              Contact
            </Link>
          </div>
        </nav>
      

      {/* hero */}
      <div className="">

        {/* hero content */}
        <div className=''>
          <h1 className="">
            Find
            <span className=''> answers</span>,
            share
            <span className=''> knowledge</span>,
            build your
            <span className=''> skills</span>
          </h1>
          <p className=''>
            Join our thriving community of developers to learn, share, and grow together.
          </p>
        </div>

        {/* hero image */}
        <div className=''>
          <img src={illustration} alt="group of people" />
        </div>

      </div>
    </div>
  )
}

export default Login