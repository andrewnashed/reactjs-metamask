import React from 'react';


const Layout = ({children}) => {
    return ( <div className='bg-slate-800 h-screen flex flex-col items-center justify-center'>
        {children}
    </div> );
}
 
export default Layout;