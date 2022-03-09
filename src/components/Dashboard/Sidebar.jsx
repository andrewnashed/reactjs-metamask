import React from 'react';
import {SiHomeadvisor, SiSubstack} from 'react-icons/si'
import {BsCardList,BsStack} from 'react-icons/bs'
import {FaLightbulb, FaUsers, FaUser} from 'react-icons/fa'
import {RiSettings3Fill} from 'react-icons/ri'
import {Link, useLocation} from 'react-router-dom'


const SideBar = () => {

    const location = useLocation()

    const drawerLinks = [
        {
            url: '',
            name: 'Home',
            icon: <SiHomeadvisor/>,
            category: 'main'
        },
        {
            url: '/members-directory',
            name: 'Members Directory',
            icon: <BsCardList/>,
            category: 'main'
        },
        {
            url: '/project-and-ideas',
            name: 'Project and ideas',
            icon: <FaLightbulb/>,
            category: 'main'
        },
        {
            url: '/events',
            name: 'Events',
            icon: <FaUsers/>,
            category: 'main'
        },
        {
            url: '/agent',
            name: 'Agent',
            icon: <FaUser/>,
            category: 'main'
        },
        {
            url: '/resources',
            name: 'Resources',
            icon: <BsStack />,
            category: 'main'
        },
        {
            url: '/settings',
            name: 'Settings',
            icon: <RiSettings3Fill/>,
            category: 'footer'
        },
        {
            url: '/subscription',
            name: 'Subsicription',
            icon: <SiSubstack/>,
            category: 'footer'
        },
    ]

   
    return ( 
    <div className='space-y-16 w-full flex flex-col items-start'>
        <p className="text-3xl px-10">DAO Dashboard</p>
        <section className='w-full text-xl text-gray-400'>
        <ul className="flex w-full  flex-col items-start">
            {drawerLinks.filter(link => link.category === 'main').map(link => {return(<li className={`w-full  ${location.pathname === '/dashboard' + link.url && 'bg-slate-900 border-l-2 border-gray-400 text-gray-300'} hover:bg-slate-900 hover:text-gray-300`} key={drawerLinks.indexOf(link)}>
            <Link to={`/dashboard${link.url}`} className='pl-10'>
                  {link.icon}  {link.name}
                </Link>
            </li>)}
            )}
        </ul>
        <hr className='w-full h-4 mt-4 border-gray-500 text-gray-700'/>
        <ul className="flex w-full  flex-col items-start">
            {drawerLinks.filter(link => link.category === 'footer').map(link => {return(<li className={`w-full ${location.pathname === '/dashboard' + link.url && 'bg-slate-900 border-l-2 border-gray-400 text-gray-300'}  hover:bg-slate-900 hover:text-gray-300`} key={drawerLinks.indexOf(link)}>
                <Link to={`/dashboard${link.url}`} className='pl-10'>
                  {link.icon}  {link.name}
                </Link>
            </li>)}
            )}
        </ul>
        </section>
       
    </div> );
}
 
export default SideBar;