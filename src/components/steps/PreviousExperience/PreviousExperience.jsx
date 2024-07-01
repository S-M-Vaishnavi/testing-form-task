import React, {  useContext,useState } from 'react';
import StepperControl from '../../StepperControl';
import { StepperContext } from "../../contexts/StepperContext";

const PreviousExperience = ({ handleClick, currentStep, steps }) => {
  const { userData, setUserData } = useContext(StepperContext);
  const [errors, setErrors] = useState({});
  const [fromData, setFromData] = useState(userData.experience?.from || {
    date: '',
    firmName: '',
    phone: '',
    startingSalary: '',
  });

  const [toData, setToData] = useState(userData.experience?.to || {
    date: '',
    street: '',
    city: '',
    zip: '',
    state: '',
    jobTitle: '',
    supervisorName: '',
  });

  const [jobData, setJobData] = useState(userData.experience?.jobs || {
    jobTitle: '',
    supervisorName: '',
    supervisorTitle: '',
  });

  const [responsibilities, setResponsibilities] = useState(userData.experience?.responsibilities || '');
  const [reasonForLeaving, setReasonForLeaving] = useState(userData.experience?.reasonForLeaving || '');
  const [contact, setContact] = useState(userData.experience?.contact || '');

  const handleFromDataChange = (field, value) => {
    setFromData(prev => ({ ...prev, [field]: value }));
  }

  const handleToDataChange = (field, value) => {
    setToData(prev => ({ ...prev, [field]: value }));
  }

  const handleJobDataChange = (field, value) => {
    setJobData(prev => ({ ...prev, [field]: value }));
  }

  const handleResponsibilitiesChange = (e) => {
    setResponsibilities(e.target.value);
  }

  const handleReasonForLeavingChange = (e) => {
    setReasonForLeaving(e.target.value);
  }

  const handleContactChange = (value) => {
    setContact(value);
  }

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate fromData
    if (!fromData.date || !fromData.firmName || !fromData.phone || !fromData.startingSalary) {
      newErrors.fromData = 'Please fill all fields in the "From" section';
      isValid = false;
    }

    // Validate toData
    if (!toData.date || !toData.street || !toData.city || !toData.zip || !toData.state || !toData.jobTitle || !toData.supervisorName) {
      newErrors.toData = 'Please fill all fields in the "To" section';
      isValid = false;
    }

    // Validate jobData
    if (!jobData.jobTitle || !jobData.supervisorName || !jobData.supervisorTitle) {
      newErrors.jobData = 'Please fill all fields in the job details section';
      isValid = false;
    }

    if (responsibilities === '') {
      newErrors.responsibilities = 'Please fill the Responsibilities';
      isValid = false;
    }
    if (reasonForLeaving === '') {
      newErrors.reasonForLeaving = 'Please fill the Reason for Leaving';
      isValid = false;
    }
    if (contact === '') {
      newErrors.contact = 'Please select an option for contacting the employer';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setUserData(prevData => ({
        ...prevData,
        experience: {
          from: fromData,
          to: toData,
          jobs: jobData,
          responsibilities,
          reasonForLeaving,
          contact
        }
      }));
      handleClick("next");
    }
  };
  return (
    <div className="flex flex-col">
      <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Previous Experience (Start with current or most recent employer)</h1>
      <table className="table-auto  border border-slate-500 mt-9">
        <thead>
          <tr>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">From (Month/Year)</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Firm Name</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Phone</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Starting Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300"> <input type="text" value={fromData.date} onChange={(e) => handleFromDataChange('date', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
            <td className="border border-gray-300 "> <input type="text" value={fromData.firmName} onChange={(e) => handleFromDataChange('firmName', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
            <td className="border border-gray-300 "> <input type="text"  value={fromData.phone} onChange={(e) => handleFromDataChange('phone', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
            <td className="border border-gray-300 "> <input type="text"  value={fromData.startingSalary} onChange={(e) => handleFromDataChange('startingSalary', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
          </tr>
        </tbody>
      </table>
      {errors.fromData && <div className="text-red-500 mt-1">{errors.fromData}</div>}

      <table className="table-auto  border border-slate-500 mt-9">
        <thead>
          <tr>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">To (Month/Year)</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Street</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">City</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Zip</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">State</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Job Title</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300"> <input type="text" value={toData.date} onChange={(e) => handleToDataChange('date', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
            <td className="border border-gray-300 "> <input type="text" value={toData.street} onChange={(e) => handleToDataChange('street', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
            <td className="border border-gray-300 "> <input type="text" value={toData.city} onChange={(e) => handleToDataChange('city', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
            <td className="border border-gray-300 "> <input type="text" value={toData.zip} onChange={(e) => handleToDataChange('zip', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
            <td className="border border-gray-300"> <input type="text" value={toData.state} onChange={(e) => handleToDataChange('state', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
            <td className="border border-gray-300 "> <input type="text" value={toData.jobTitle} onChange={(e) => handleToDataChange('jobTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
            <td className="border border-gray-300 "> <input type="text" value={toData.supervisorName} onChange={(e) => handleToDataChange('supervisorName', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
          </tr>
        </tbody>
      </table>
      {errors.toData && <div className="text-red-500 mt-1">{errors.toData}</div>}

      <table className="table-auto  border border-slate-500 mt-9">
        <thead>
          <tr>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Job Title</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Name</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300"> <input type="text" value={jobData.jobTitle} onChange={(e) => handleJobDataChange('jobTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
            <td className="border border-gray-300 "> <input type="text"  value={jobData.supervisorName} onChange={(e) => handleJobDataChange('supervisorName', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
            <td className="border border-gray-300 "> <input type="text"  value={jobData.supervisorTitle} onChange={(e) => handleJobDataChange('supervisorTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
          </tr>
        </tbody>
      </table>
      {errors.jobData && <div className="text-red-500 mt-1">{errors.jobData}</div>}

      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"> Responsibilities:</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input 
          type="text" 
          value={responsibilities}
          onChange={handleResponsibilitiesChange}
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800" 
        />
      </div>
      {errors.responsibilities && <div className="text-red-500 mt-1">{errors.responsibilities}</div>}

      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Reason For Leaving:</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input 
          type="text" 
          value={reasonForLeaving}
          onChange={handleReasonForLeavingChange}
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800" 
        />
      </div>
      {errors.reasonForLeaving && <div className="text-red-500 mt-1">{errors.reasonForLeaving}</div>}

      <div className="flex gap-5 items-center">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">May we contact the above employer?</div>
        <div className="flex gap-3 justify-center items-baseline mt-3">
          <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> Yes</div>
          <div> 
            <input 
              type="radio" 
              name="contactRadio" 
              value="yes"
              checked={contact === 'yes'}
              onChange={() => handleContactChange('yes')}
              className="mb-4" 
            />
          </div>
        </div>
        <div className="flex gap-3 justify-center items-baseline mt-3">
          <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> No</div>
          <div>
            <input 
              type="radio"  
              name="contactRadio" 
              value="no"
              checked={contact === 'no'}
              onChange={() => handleContactChange('no')}
              className="mb-4" 
            />
          </div>
        </div>
      </div>
      {errors.contact && <div className="text-red-500 mt-1">{errors.contact}</div>}


      <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps} />
    </div>


  )
}

export default PreviousExperience
