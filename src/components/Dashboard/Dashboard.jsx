import SideBar from "./Sidebar";
import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {IoIosNotifications} from 'react-icons/io'
import { UserState } from "../../context/UserContext";
import { Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
    const {account} = UserState()
    const location = useLocation()
    
    
    const truncatestring = (str) => {
        if (str && str.length <= 4) {
            return str
        }
        return str.slice(0, 4) + '......' + str.slice(-5)
    }

    const toUpperCase = (str) => {
        const arr = str.split("-");
    
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
        }
    
        const str2 = arr.join(" ");
        return str2.replace('-', ' ')
      }

    return( <div className="w-full">
        <div className="h-screen drawer drawer-mobile  bg-gray-200 w-full">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
  <div className="drawer-content flex flex-col sm:items-start bg-slate-100 lg:items-center space-y-10 p-2 " >
  <label htmlFor="my-drawer-2" className="btn-text w-full bg-white itmes-center drawer-button lg:hidden">
      <span className="flex items-center p-4 text-3xl justify-start">
      <AiOutlineMenu className="mr-3"/> Dashboard
      </span>
      </label>
    <nav className="flex w-full text-2xl lg:text-3xl justify-between items-center lg:px-7 py-6">
        <span className="flex items-center text-gray-700 font-bold"> 
        {location.pathname === '/dashboard'? 'Home' :toUpperCase(location.pathname.replace('/dashboard/',''))}
        </span>
        <section className="flex justify-evenly text-gray-400 items-center space-x-6">
        <ul className="flex justify-evenly items-center space-x-4">
            <li>
                <button>
                    <AiOutlineSearch/>
                </button>
            </li>
            <li>
                <button>
                    <IoIosNotifications/>
                </button>
            </li>
        </ul>
        <div className='w-[3px] bg-gray-400 h-[35px]'></div>
        <ul className="flex justify-evenly items-center  space-x-4">
            <li className="badge badge-md lg:badge-lg bg-gray-400 border-0 p-2 lg:p-4">
                {account && truncatestring(account)}
            </li>
            <li>
            <div className="avatar">
                <div className="w-8 lg:w-16 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=92310" alt="user avatar"/>
                </div>
            </div>    
            </li>
        </ul>
        </section>
        
    </nav>
   <Outlet/>
  </div> 
  <div className="drawer-side bg-white">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
   
    <section className="menu py-8 overflow-y-auto w-80 text-2xl flex flex-col  text-gray-300 space-y-20 bg-gray-700">
        <SideBar/>
    </section>
  
  </div>
</div>
    </div> );
}
 
export default Dashboard;