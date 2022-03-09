import { createContext, useEffect, useContext, useState } from 'react';



export const UserContext = createContext();


export const UserProvider = ({children}) => {
    const [account, setAccount] = useState(null)
    

    const checkIfWalletIsConnect = async () => {
        if(window.ethereum){
            
          try{
          const accounts = await window.ethereum.request({
            method: "eth_accounts"
          })
          if (accounts && accounts.length > 0 ) {
              setAccount(accounts[0])
              return true
          }
          
          } catch (error){
            console.log(error);
          }
        } else {
            alert('metamask not detected')
        }
    }
    
    const connectWallet = async () => {
        if(window.ethereum){
          try{
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
          })
          
          if (accounts && accounts.length > 0 ) {
            setAccount(accounts[0])
          }
          
          
          } catch (error){
            console.log(error);
          }
        } else {
            alert('metamask not detected')
        }
    };

    useEffect(()=>{
        checkIfWalletIsConnect();
    },[])

    return (
        <UserContext.Provider value={{ connectWallet, account, checkIfWalletIsConnect}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserState = () => useContext(UserContext)