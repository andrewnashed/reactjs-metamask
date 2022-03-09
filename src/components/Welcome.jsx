import { UserState } from "../context/UserContext";
import { useState } from "react";
import FormComponent from "./OnBoarding/OnBoarding";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const [onBoarding, setOnBoarding] = useState(false)
    const {account, connectWallet} = UserState();
    const navigate = useNavigate();

    const startOnBoarding = () => {
        connectWallet().then(()=>{
            if(window.ethereum) setOnBoarding(true)
        });
    }

    return (
        <>
        {onBoarding? <FormComponent /> : <div className="text-gray-300 flex text-5xl flex-col items-center space-y-6" >
        <h1>Welcome To DAO Front </h1>
        {account? <button onClick={()=> navigate('/dashboard/members-directory')} className="btn btn-primary w-1/2">Dashboard</button> :
        
        <button className="btn btn-primary w-1/2" onClick={startOnBoarding}>Connect with Metamask</button>}
    </div> }
        </>
    );
}
 
export default Welcome;