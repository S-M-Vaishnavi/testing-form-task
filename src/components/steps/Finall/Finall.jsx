import React from 'react';
import StepperControl from '../../StepperControl'; 

const Finall = ({ handleClick, currentStep, steps }) => {
  
  return (
    <div className='container md:mt-10'>
      <div className='flex flex-col items-center'>
        <div className='text-green-400'>
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>

        <div className='mt-3 text-xl font-semibold uppercase text-green-500'>Congratulations!</div>
        <div className='text-lg font-semibold text-gray-500'>Your Form has been created.</div>
        <a href="/" className='mt-10'></a>
        {/* <button className='h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100'>Close</button> */}
      </div>
    </div>
  )
}

export default Finall;
