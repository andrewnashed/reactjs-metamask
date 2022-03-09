import React,{useState} from 'react';
import {FcGoogle} from 'react-icons/fc'

export const ChooseYourRole =({register}) =>{
  const [roles] = useState([
    'developer', 'marketer', 'biz dev', 'lurker', 'designer'
  ])
    return(
        <>
        <h2 className='w-full text-center'>Choose your Role</h2>
        <div className="form-control w-full flex flex-col items-start">
  <label className="label label-text">DISCORD OR NAME
  </label>
  <input {...register('discordname')} type="text" placeholder="Type here" className="input input-bordered w-full "/>
  <div className="form-control w-full">
  <label className="label label-text">
    I AM A...
    
  </label>
  <select {...register('role')} className="select w-full select-bordered">
    <option disabled selected>Designer, Marketer, Developer, Lurker,...</option>
    {roles.map(role=> <option key={roles.indexOf(role)} value={role}>{role}</option>)}
  </select>
</div>
</div>
      </>
    )
}

export const OnBoardingCall = ({register}) => {
    const [availableDates] = useState([
      'Thurday, March 10th 2021', 'Thurday, March 11th 2021', 'Thurday, March 12th 2021', 'Thurday, March 13th 2021'
    ])
    return(
        <>
        <h2 className='w-full text-center'>ATTEND AN UPCOMPING ONBOARDING CALL</h2>
        <div className="form-control w-full">
            <label className="label label-text">
                ATTEND AN UPCOMPING ONBOARDING CALL
            </label>
            <select {...register("OnBoardingCall")} className="select w-full select-bordered">
                <option disabled>Check Available days</option>
                {availableDates.map(date => <option key={availableDates.indexOf(date)} value={date}>{date}</option>)}
            </select>
        </div>
        <a href="#" className='text-right flex justify-end items-center  text-gray-700'>
            <FcGoogle className='mr-2'/> Add to calender</a>
        </>
    )
}

const Review = () => {
    return <p className='text-center text-xl text-gray-600'>Say hi to your community in discord 👋</p>
}

const Form = ({activeStep, handleSubmit, onSubmit, register, children}) => {
    


    function getStepContent(step) {
        switch (step) {
          case 1:
            return <ChooseYourRole register={register} />;
          case 2:
            return <OnBoardingCall register={register}  />;
          case 3:
            return <Review />;
          default:
            throw new Error('Unknown step');
        }
      }

    return ( 
    <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col text-gray-400 space-y-4'>
        {getStepContent(activeStep)}
        {children}
    </form> 
    );
}
 
export default Form;