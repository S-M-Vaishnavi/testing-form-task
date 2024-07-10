// import React, { useState, useContext, useEffect } from 'react';
// import StepperControl from '../../StepperControl'; 
// import { StepperContext } from "../../contexts/StepperContext";

// const AdditionalQualification = ({ handleClick, currentStep, steps }) => {
//   const { userData, setUserData } = useContext(StepperContext);
//   const [additionalQualities, setAdditionalQualities] = useState({
//     'inputBox1': '',
//     'inputBox2': '',
//     'inputBox3': '',
//   });
//   const [errors, setErrors] = useState({});

//   const validateInputs = () => {
//     const newErrors = {};
//     if (!additionalQualities.inputBox1 && !additionalQualities.inputBox2 && !additionalQualities.inputBox3) {
//       newErrors.general = "Please add at least one additional qualification";
//     }
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     setAdditionalQualities(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
//     setErrors(prevState => ({ ...prevState, [e.target.name]: '' }));
//     setUserData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
//   };
//   console.log(additionalQualities);

//   useEffect(() => {
//     setAdditionalQualities({
//       inputBox1: userData.inputBox1 || '',
//       inputBox2: userData.inputBox2 || '',
//       inputBox3: userData.inputBox3 || '',
//     });
//   }, [userData]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateInputs();
//     if (Object.keys(validationErrors).length === 0) {
//       console.log(JSON.stringify(additionalQualities));
//       handleClick("next", true);
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <div className="flex flex-col">
//       <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
//         Please identify any additional knowledge, skills, qualifications, 
//         or awards that will be helpful to us in considering your application for employment.
//       </div>
//       <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//         <input
//           type="text"
//           name="inputBox1"
//           value={additionalQualities.inputBox1}
//           onChange={handleChange}
//           className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
//         />
//       </div>
//       <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//         <input
//           type="text"
//           name="inputBox2"
//           value={additionalQualities.inputBox2}
//           onChange={handleChange}
//           className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
//         />
//       </div>
//       <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//         <input
//           type="text"
//           name="inputBox3"
//           value={additionalQualities.inputBox3}
//           onChange={handleChange}
//           className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
//         />
//       </div>
//       {errors.general && <span className='text-red-500'>{errors.general}</span>}
//       <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps}/>
//     </div>
//   );
// };

// export default AdditionalQualification;



import React, { useState, useContext, useEffect } from 'react';
import StepperControl from '../../StepperControl'; 
import { StepperContext } from "../../contexts/StepperContext";

const AdditionalQualification = ({ handleClick, currentStep, steps }) => {
  const { userData, setUserData } = useContext(StepperContext);
  const [additionalQualities, setAdditionalQualities] = useState(userData.additionalQualities || '');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (userData.additionalQualities) {
      setAdditionalQualities(userData.additionalQualities);
    }
  }, [userData]);

  const validateInputs = () => {
    const newErrors = {};
    if (!additionalQualities) {
      newErrors.general = "Please add at least one additional qualification";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalQualities(value);
    setErrors(prevState => ({ ...prevState, [name]: '' }));
    setUserData(prevState => ({ ...prevState, additionalQualities: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      handleClick("next", true);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        Please identify any additional knowledge, skills, qualifications, 
        or awards that will be helpful to us in considering your application for employment.
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <textarea
          name="additionalQualities"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800 h-[60px]"
          value={additionalQualities}
          onChange={handleChange}
        ></textarea>
      </div>
      {errors.general && <span className='text-red-500'>{errors.general}</span>}
      <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps}/>
    </div>
  );
};

export default AdditionalQualification;


