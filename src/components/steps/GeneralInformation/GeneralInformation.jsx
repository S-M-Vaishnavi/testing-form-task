import React from "react";
import { useContext, useState,useEffect } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import StepperControl from '../../StepperControl'; 

const GeneralInformation = ({handleClick,currentStep,steps}) => {
  const { userData, setUserData } = useContext(StepperContext);
  const [inputValues, setInputValues] = useState([{
    fullName: '',
    currentPhoneNumber: '',
    currentFaxNumber: '',
    email: '',
    address: '',
    positionDesired: '',
    presentSalary: '',
    salaryDesired: '',
    startDate: '',
    everApplied: '',
    when: '',
    findWhere: '',
    legallyPermitted: '',
    status: '',
    crime: '',
    timePreference: ''
  }]);
  const [errors, setErrors] = useState({});
  const validateInputs = () => {
    let newErrors = {};
    
    if (!inputValues.fullName) {
        newErrors.fullName = "Full name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(inputValues.fullName) || inputValues.fullName.length < 3) {
        newErrors.fullName = "Full name must be at least 3 characters long and contain only letters and spaces";
    }
    
    if (!inputValues.currentPhoneNumber) {
        newErrors.currentPhoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(inputValues.currentPhoneNumber)) {
        newErrors.currentPhoneNumber = 'Phone Number must be 10 digits';
    }
    
    if (!inputValues.currentFaxNumber) {
        newErrors.currentFaxNumber = "Current Fax Number is required";
    } else if (!/^\d{10}$/.test(inputValues.currentFaxNumber)) {
        newErrors.currentFaxNumber = 'Fax Number must be 10 digits';
    }
    
    if (!inputValues.email) {
        newErrors.email = 'Email is required';
    }
    
    if (!inputValues.address) newErrors.address = "Address is required";
    if (!inputValues.positionDesired) newErrors.positionDesired = 'Position Desired is required';
    
    if (!inputValues.presentSalary) {
        newErrors.presentSalary = 'Present Salary is required';
    } else if (isNaN(inputValues.presentSalary)) {
        newErrors.presentSalary = 'Present Salary must be a number';
    }
    
    if (!inputValues.salaryDesired) {
        newErrors.salaryDesired = 'Salary Desired is required';
    } else if (isNaN(inputValues.salaryDesired)) {
        newErrors.salaryDesired = 'Salary Desired must be a number';
    }
    
    if (!inputValues.startDate) {
        newErrors.startDate = 'Start Date is required';
    }
    
    if (!inputValues.timePreference) {
        newErrors.timePreference = 'Please select Part Time or Full Time';
    }
    
    if (!inputValues.everApplied) {
        newErrors.everApplied = 'Please answer if you have ever applied before';
    }
    
    if (inputValues.everApplied === 'Yes' && !inputValues.when) {
        newErrors.when = 'Please specify when you applied before';
    }
    
    if (!inputValues.findWhere) newErrors.findWhere = 'Please specify how you found out about SB & Company, LLC';
    
    if (!inputValues.legallyPermitted) {
        newErrors.legallyPermitted = 'Please confirm if you are legally permitted to work';
    }
    if (!inputValues.status) {
        newErrors.status = 'Please answer if you require sponsorship';
    } 
    
    if (!inputValues.crime) {
        newErrors.crime = 'Please answer if you have been convicted of a crime';
    } 
    
    setErrors(newErrors);
    return newErrors;
};

  useEffect(() => {
    setInputValues(userData);
  }, [userData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setInputValues(prevState => ({ ...prevState, [name]: newValue }));
    setUserData(prevState => ({ ...prevState, [name]: newValue }));
    setErrors(prevState => ({ ...prevState, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      console.log(JSON.stringify(inputValues));
      handleClick("next", true);
    }
};
  return (
    <form>
      <div className="flex flex-col">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Username</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="text" value={userData["fullName"] || ""} onChange={handleChange} name="fullName" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
      </div>
      {errors.fullName && <span className="text-red-500">{errors.fullName}</span> }

      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"> Current Phone Number</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="text" value={userData["currentPhoneNumber"] || ""} onChange={handleChange} name="currentPhoneNumber" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
      </div>
      {errors.currentPhoneNumber && <span className="text-red-500">{errors.currentPhoneNumber}</span> }

      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"> Current Fax Number
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="text" value={userData["currentFaxNumber"] || ""} onChange={handleChange} name="currentFaxNumber" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
      </div>
      {errors.currentFaxNumber && <span className="text-red-500">{errors.currentFaxNumber}</span> }

      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Current Email</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="email" value={userData["email"] || ""} onChange={handleChange} name="email" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
      </div>
      {errors.email && <span className="text-red-500">{errors.email}</span>}


      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Address</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="text" value={userData["address"] || ""} onChange={handleChange} name="address" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
      </div>
      {errors.address && <span className="text-red-500">{errors.address}</span>}


      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Position Desired
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="text" value={userData["positionDesired"] || ""} onChange={handleChange} name="positionDesired" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
      </div>
      {errors.positionDesired && <span className="text-red-500">{errors.positionDesired}</span>}


      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Present Salary</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="text" value={userData["presentSalary"] || ""} onChange={handleChange} name="presentSalary" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
      </div>
      {errors.presentSalary && <span className="text-red-500">{errors.presentSalary}</span>}


      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Salary Desired</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="text" value={userData["salaryDesired"] || ""} onChange={handleChange} name="salaryDesired" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
      </div>
      {errors.salaryDesired && <span className="text-red-500">{errors.salaryDesired}</span>}


      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Earliest Start Date</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="date" value={userData["startDate"] || ""} onChange={handleChange} name="startDate" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
      </div>
      {errors.startDate && <span className="text-red-500">{errors.startDate}</span>}


      <div className="flex justify-evenly">
        <div className="flex gap-3 justify-center items-baseline">
          <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">Part Time</div>
          <div>
            <input type="radio" value="partTime" checked={inputValues.timePreference === "partTime"} onChange={handleChange} name="timePreference" className="mb-4"/>
          </div>
        </div>


        <div className="flex gap-3 justify-center items-baseline">
          <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> Full Time</div>
          <div>
            <input type="radio" value="fullTime" checked={inputValues.timePreference === "fullTime"} onChange={handleChange} name="timePreference" className="mb-4"/>
          </div>
        </div>
      </div>
      {errors.timePreference && <span className="text-red-500">{errors.timePreference}</span>}


      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Have you ever applied to SB & Company, LLC before?:</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="text" value={userData["everApplied"] || ""} onChange={handleChange} name="everApplied" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
      </div>
      {errors.everApplied && <span className="text-red-500">{errors.everApplied}</span>}


      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">If yes, when?</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="text" value={userData["when"] || ""} onChange={handleChange} name="when" className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
      </div>

      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">How did you find about SB & Company, LLC</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input type="text" value={userData["findWhere"] || ""} onChange={handleChange} name="findWhere" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
      </div>
      {errors.findWhere && <span className="text-red-500">{errors.findWhere}</span>}


      <div className="lg:flex">
        <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">Are you legally permitted to work in this country</div>
            <div  className="ml-5">
            <input type="radio" value="yes" checked={inputValues.legallyPermitted === "yes"} onChange={handleChange} name="legallyPermitted" className="ml-5 md:ml-0"/><span className="font-bold text-gray-500 text-xs uppercase">Yes</span>
            <input type="radio" value="no" checked={inputValues.legallyPermitted === "no"} onChange={handleChange} name="legallyPermitted" className="ml-5"/><span className="font-bold text-gray-500 text-xs uppercase">No</span>
            </div>
      </div>
      {errors.legallyPermitted && <span className="text-red-500">{errors.legallyPermitted}</span>}

        <div className="lg:flex">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase md:leading-0 md:mt-0"> Will you now or in the future require sponsorship for employment visa status(e.g., H-1B visa status)</div>
        <div className="flex items-baseline mt-2 md:-ml-[3px] lg:ml-0">
            <input type="radio" value="yes" checked={inputValues.status === "yes"} onChange={handleChange} name="status" className="mb-4 ml-5"/><span className="font-bold text-gray-500 text-xs uppercase">Yes</span>
            <input type="radio" value="no" checked={inputValues.status === "no"} onChange={handleChange} name="status" className="mb-4 ml-5"/><span className="font-bold text-gray-500 text-xs uppercase">No</span>
        </div>
        </div>
        
      {errors.status && <span className="text-red-500">{errors.status}</span>}

      <div className="lg:flex">
        <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> Have you ever been convicted of a crime other than a minor traffic violation?</div>
        <div className="ml-5">
            <input type="radio" value="yes" checked={inputValues.crime === "yes"} onChange={handleChange} name="crime" className="md:ml-0" /><span className="font-bold text-gray-500 text-xs uppercase">Yes</span>
            <input type="radio" value="no" checked={inputValues.crime === "no"} onChange={handleChange} name="crime" className="ml-5"/><span className="font-bold text-gray-500 text-xs uppercase">No</span>
        </div>
        </div>
      {errors.crime && <span className="text-red-500">{errors.crime}</span>}


    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">If yes, give details on a separate page and attach to the application. </div>

    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase italic">Note: a criminal conviction is not an absolute bar to employment, but will be considered in relation to specific job requirements</div>
    </div>
    <div className="md:mt-[70px]">
    <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps}/>

    </div>
    </form>
    
  );
};

export default GeneralInformation;
