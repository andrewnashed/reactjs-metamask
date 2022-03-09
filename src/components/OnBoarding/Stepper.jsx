import React from 'react';


const Stepper = ({steps, activeStep}) => {
    return ( 
        <span className='w-full flex flex-col items-center'>
            <h2 className='text-xl'>Welcome!</h2>
            <ul className="steps w-full text-lg p-3">
                {steps.map(step => <li key={steps.indexOf(step)} data-content={step <= activeStep ? '✓': step} className={`step ${(step <= activeStep || step === 0 )&& 'step-primary'}`} />)}
            </ul>
        </span> );
}
 
export default Stepper;