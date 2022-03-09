import React, {useState,useEffect} from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs'
import {FaSortAmountDown, FaFilter} from 'react-icons/fa'
import { data } from './memebers';

const UserTable = () => {

  const [badge] = useState({
    developer: 'bg-red-600',
    marketer: 'bg-purple-600',
    'biz dev': 'bg-blue-600',
    designer: 'bg-green-600',
    lurker: 'bg-yellow-500'
  })

  const [members, setMemebers] = useState(data)
  const [sortMenu, setToggleMenu] = useState(false)
  const [role, setRole] = useState(null)


  useEffect(()=>{
    if (role){const new_members = data.filter(member => member.role === role)
    setMemebers(new_members)
    setToggleMenu(false)}
  }, [role])


    return ( 
    <div className="sm:w-5/6 lg:w-full px-2 lg:px-6 flex justify-center">
      <table className=" table table-responsive lg:w-full border-2 border-gray-200 rounded-sm">
        <thead className='rounded-none' >
          <tr className='text-gray-700 rounded-none'>
            <th colSpan={4} >
                <div className="flex w-full justify-between items-center">
                  <p className='text-xl'> All Members</p> 

                  <span className='text-lg w-1/6 text-gray-400 flex justify-between space-x-4 font-bold'>
                    
                    <button onClick={()=> sortMenu? setToggleMenu(false):setToggleMenu(true)} className='flex font-bold w-1/2 items-center justify-evenly space-x-2'>
                          <FaSortAmountDown className=''/> Sort
                      </button>
                    {sortMenu && <ul className='absolute bg-gray-700 p-4 mt-7 left-[82%] rounded-md'>
                      <li className='text-md hover:text-gray-300'><button onClick={()=>setMemebers(data)}>ALL</button></li>
                  {Object.keys(badge).map((key) => <li key={key} className='text-md hover:text-gray-300'> <button onClick={()=>setRole(key)}>{key.toUpperCase()}</button></li> )}
                </ul>}
                   
                      
                      <button className='flex font-bold w-1/2 items-center justify-evenly space-x-2'>
                          <FaFilter/> Filter
                      </button>
                  </span>
                </div>    
              
            </th>
           
            <th></th>
        </tr>
      <tr className='border-b-2 text-gray-400 rounded-none border-gray-200'>
        
        <th>Member details</th>
        <th>Discord name</th>
        <th>Date joined</th>
        <th>Role</th>
        <th></th>
      </tr>
    </thead>
    <tbody className="text-gray-500">
      {members.map(member => {
        return(
          <tr key={members.indexOf(member)} className='border-gray-200 border-b-2'>
        <td >
          <div className="flex items-center space-x-2">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
              <img src={member.avatar} alt="user avatar"/>
              </div>
            </div>
            <div>
              <div className="font-bold">{member.status.text}</div>
              <div className="text-sm opacity-50">Updated {member.status.last_updated}</div>
            </div>
          </div>
        </td>
        <td>
        <div className="font-bold">{member.discord_name}</div>
          <div className="text-sm opacity-50">On {member.discord_date}</div>
        </td>
        <td>
            <div className='font-bold'>{member.date_joined.date}</div>
          <div className="text-sm opacity-50">{member.date_joined.time}</div>
          </td>
        <td>
        <div className={`badge badge-md ${badge[member.role]} border-0`}>{member.role.toUpperCase()}</div>
        </td>
        <td><BsThreeDotsVertical/></td>
      </tr>
        )
      })}
    </tbody>
   
    
  </table>
</div> );
}
 
export default UserTable;