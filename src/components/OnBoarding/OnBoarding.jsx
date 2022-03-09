import React, { useState } from 'react';
import About from './About';
import Form from './Form';
import Stepper from './Stepper';
import {SiDiscord} from 'react-icons/si'
import {useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
    const [activeStep, setActiveStep] = useState(0)
    const navigate = useNavigate();
    const steps = [1, 2, 3]
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        navigate('/dashboard/members-directory')
    }

    return ( <div className='bg-white relative h-[550px] w-5/6 lg:w-1/3 flex flex-col space-y-4 items-center text-gray-700 p-6 rounded-xl'>
        {activeStep > 0 && <a href="#" className='text-right flex justify-end items-center text-md w-full'> <SiDiscord className='mr-2 text-xl text-primary' />Skip and Join Discord</a>}
        <Stepper steps={steps} activeStep={activeStep}/>
        
        {activeStep === 0?<About/>: <Form activeStep={activeStep} onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} >
            {activeStep === 3  && <input className='btn w-[90%] btn-primary absolute bottom-10' type={'submit'} value={'Get In Here!'} />}
            </Form>}
       {activeStep < 3 && <button onClick={()=> setActiveStep(activeStep + 1)} className='btn w-[90%]  btn-primary absolute bottom-10'>Next</button>}
    </div> 
    
    )
}
 
export default FormComponent;