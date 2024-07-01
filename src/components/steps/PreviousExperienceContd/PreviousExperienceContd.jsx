// import React from 'react';
// import StepperControl from '../../StepperControl';

// const PreviousExperienceContd = ({ handleClick, currentStep, steps }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleClick("next", true);
//   };
//   return (
//     <div className="flex flex-col">
//       <h1 className='font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase'>Previous Experience (Start with current or most recent employer)</h1>
//       <table className="table-auto  border border-slate-500 mt-9">
//         <thead>
//           <tr>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">From (Month/Year)</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Firm Name</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Phone</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Starting Salary</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//           </tr>
//         </tbody>
//       </table>
//       <table className="table-auto  border border-slate-500 mt-9">
//         <thead>
//           <tr>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">To (Month/Year)</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Street</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">City</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Zip</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">State</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Job Title</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//           </tr>
//         </tbody>
//       </table>
//       <table className="table-auto  border border-slate-500 mt-9">
//         <thead>
//           <tr>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Job Title</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Name</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Title</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//           </tr>
//         </tbody>
//       </table>
//       <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"> Responsibilities:</div>
//       <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//         <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
//         <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
//       </div>
//       <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Reason For Leaving:</div>
//       <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//         <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
//         <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
//       </div>

//       <div className="flex gap-5 items-center">
//         <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">May we contact the above employer?</div>
//         <div className="flex gap-3 justify-center items-baseline mt-3">
//           <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> yes</div>
//           <div> <input type="radio" name="contactRadio" className="mb-4" /></div>
//         </div>

//         <div className="flex gap-3 justify-center items-baseline mt-3">
//           <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> No</div>
//           <div><input type="radio"  name="contactRadio" className="mb-4" /></div>
//         </div>
//       </div>

//       <table className="table-auto  border border-slate-500 mt-9">
//         <thead>
//           <tr>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">From (Month/Year)</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Firm Name</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Phone</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Starting Salary</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//           </tr>
//         </tbody>
//       </table>
//       <table className="table-auto  border border-slate-500 mt-9">
//         <thead>
//           <tr>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">To (Month/Year)</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Street</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">City</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Zip</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">State</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Job Title</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//           </tr>
//         </tbody>
//       </table>
//       <table className="table-auto  border border-slate-500 mt-9">
//         <thead>
//           <tr>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Job Title</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Name</th>
//             <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Title</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-300"> <input type="text" className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//           </tr>
//         </tbody>
//       </table>
//       <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"> Responsibilities:</div>
//       <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//         <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
//         <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
//       </div>
//       <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Reason For Leaving:</div>
//       <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//         <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
//         <input type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
//       </div>

//       <div className="flex gap-5 items-center">
//         <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">May we contact the above employer?</div>
//         <div className="flex gap-3 justify-center items-baseline mt-3">
//           <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> yes</div>
//           <div> <input type="radio" name="contactRadio" className="mb-4" /></div>
//         </div>

//         <div className="flex gap-3 justify-center items-baseline mt-3">
//           <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> No</div>
//           <div><input type="radio"  name="contactRadio" className="mb-4" /></div>
//         </div>
//       </div>

//       <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps} />
//     </div>


//   )
// }

// export default PreviousExperienceContd

import React, { useContext, useState } from 'react';
import StepperControl from '../../StepperControl';
import { StepperContext } from "../../contexts/StepperContext";

const PreviousExperienceContd = ({ handleClick, currentStep, steps }) => {
  const { userData, setUserData } = useContext(StepperContext);
  const [errors, setErrors] = useState({});
  const [experiences, setExperiences] = useState(
    userData.experiences || [
      {
        from: {
          date: '',
          firmName: '',
          phone: '',
          startingSalary: '',
        },
        to: {
          date: '',
          street: '',
          city: '',
          zip: '',
          state: '',
          jobTitle: '',
          supervisorName: '',
        },
        job: {
          jobTitle: '',
          supervisorName: '',
          supervisorTitle: '',
        },
        responsibilities: '',
        reasonForLeaving: '',
        contact: '',
      }
    ]
  );

  const handleFromDataChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index].from[field] = value;
    setExperiences(newExperiences);
  }

  const handleToDataChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index].to[field] = value;
    setExperiences(newExperiences);
  }

  const handleJobDataChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index].job[field] = value;
    setExperiences(newExperiences);
  }

  const handleResponsibilitiesChange = (index, value) => {
    const newExperiences = [...experiences];
    newExperiences[index].responsibilities = value;
    setExperiences(newExperiences);
  }

  const handleReasonForLeavingChange = (index, value) => {
    const newExperiences = [...experiences];
    newExperiences[index].reasonForLeaving = value;
    setExperiences(newExperiences);
  }

  const handleContactChange = (index, value) => {
    const newExperiences = [...experiences];
    newExperiences[index].contact = value;
    setExperiences(newExperiences);
  }

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    experiences.forEach((exp, index) => {
      if (!exp.from.date || !exp.from.firmName || !exp.from.phone || !exp.from.startingSalary) {
        newErrors[`fromData${index}`] = 'Please fill all fields in the "From" section';
        isValid = false;
      }

      if (!exp.to.date || !exp.to.street || !exp.to.city || !exp.to.zip || !exp.to.state || !exp.to.jobTitle || !exp.to.supervisorName) {
        newErrors[`toData${index}`] = 'Please fill all fields in the "To" section';
        isValid = false;
      }

      if (!exp.job.jobTitle || !exp.job.supervisorName || !exp.job.supervisorTitle) {
        newErrors[`jobData${index}`] = 'Please fill all fields in the job details section';
        isValid = false;
      }

      if (exp.responsibilities === '') {
        newErrors[`responsibilities${index}`] = 'Please fill the Responsibilities';
        isValid = false;
      }
      if (exp.reasonForLeaving === '') {
        newErrors[`reasonForLeaving${index}`] = 'Please fill the Reason for Leaving';
        isValid = false;
      }
      if (exp.contact === '') {
        newErrors[`contact${index}`] = 'Please select an option for contacting the employer';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setUserData(prevData => ({
        ...prevData,
        experiences: experiences
      }));
      handleClick("next");
    }
  };


  const handleAddExperience = () => {
    setExperiences([...experiences, {
      from: { date: '', firmName: '', phone: '', startingSalary: '' },
      to: { date: '', street: '', city: '', zip: '', state: '', jobTitle: '', supervisorName: '' },
      job: { jobTitle: '', supervisorName: '', supervisorTitle: '' },
      responsibilities: '',
      reasonForLeaving: '',
      contact: '',
    }]);
  }

  const handleRemoveExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Previous Experience (Start with current or most recent employer)</h1>
      
      {experiences.map((experience, index) => (
        <div key={index} className="mb-10">
          <table className="table-auto border border-slate-500 mt-9">
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
                <td className="border border-gray-300"> <input type="text" value={experience.from.date} onChange={(e) => handleFromDataChange(index, 'date', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
                <td className="border border-gray-300 "> <input type="text" value={experience.from.firmName} onChange={(e) => handleFromDataChange(index, 'firmName', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
                <td className="border border-gray-300 "> <input type="text"  value={experience.from.phone} onChange={(e) => handleFromDataChange(index, 'phone', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
                <td className="border border-gray-300 "> <input type="text"  value={experience.from.startingSalary} onChange={(e) => handleFromDataChange(index, 'startingSalary', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
              </tr>
            </tbody>
          </table>
          {errors[`fromData${index}`] && <div className="text-red-500 mt-1">{errors[`fromData${index}`]}</div>}

          <table className="table-auto border border-slate-500 mt-9">
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
                <td className="border border-gray-300"> <input type="text" value={experience.to.date} onChange={(e) => handleToDataChange(index, 'date', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
                <td className="border border-gray-300 "> <input type="text" value={experience.to.street} onChange={(e) => handleToDataChange(index, 'street', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
                <td className="border border-gray-300 "> <input type="text" value={experience.to.city} onChange={(e) => handleToDataChange(index, 'city', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
                <td className="border border-gray-300 "> <input type="text" value={experience.to.zip} onChange={(e) => handleToDataChange(index, 'zip', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
                <td className="border border-gray-300"> <input type="text" value={experience.to.state} onChange={(e) => handleToDataChange(index, 'state', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
                <td className="border border-gray-300 "> <input type="text" value={experience.to.jobTitle} onChange={(e) => handleToDataChange(index, 'jobTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
                <td className="border border-gray-300 "> <input type="text" value={experience.to.supervisorName} onChange={(e) => handleToDataChange(index, 'supervisorName', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
              </tr>
            </tbody>
          </table>
          {errors[`toData${index}`] && <div className="text-red-500 mt-1">{errors[`toData${index}`]}</div>}

          <table className="table-auto border border-slate-500 mt-9">
            <thead>
              <tr>
                <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Job Title</th>
                <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Name</th>
                <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300"> <input type="text" value={experience.job.jobTitle} onChange={(e) => handleJobDataChange(index, 'jobTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
                <td className="border border-gray-300 "> <input type="text"  value={experience.job.supervisorName} onChange={(e) => handleJobDataChange(index, 'supervisorName', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
                <td className="border border-gray-300 "> <input type="text"  value={experience.job.supervisorTitle} onChange={(e) => handleJobDataChange(index, 'supervisorTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
              </tr>
            </tbody>
          </table>
          {errors[`jobData${index}`] && <div className="text-red-500 mt-1">{errors[`jobData${index}`]}</div>}

          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"> Responsibilities:</div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input 
              type="text" 
              value={experience.responsibilities}
              onChange={(e) => handleResponsibilitiesChange(index, e.target.value)}
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800" 
            />
          </div>
          {errors[`responsibilities${index}`] && <div className="text-red-500 mt-1">{errors[`responsibilities${index}`]}</div>}

          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Reason For Leaving:</div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input 
              type="text" 
              value={experience.reasonForLeaving}
              onChange={(e) => handleReasonForLeavingChange(index, e.target.value)}
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800" 
            />
          </div>
          {errors[`reasonForLeaving${index}`] && <div className="text-red-500 mt-1">{errors[`reasonForLeaving${index}`]}</div>}

          <div className="flex gap-5 items-center">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">May we contact the above employer?</div>
            <div className="flex gap-3 justify-center items-baseline mt-3">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> Yes</div>
              <div> 
                <input 
                  type="radio" 
                  name={`contactRadio${index}`} 
                  value="yes"
                  checked={experience.contact === 'yes'}
                  onChange={() => handleContactChange(index, 'yes')}
                  className="mb-4" 
                />
              </div>
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> No</div>
              <div>
                <input 
                  type="radio"  
                  name={`contactRadio${index}`} 
                  value="no"
                  checked={experience.contact === 'no'}
                  onChange={() => handleContactChange(index, 'no')}
                  className="mb-4" 
                />
              </div>
            </div>
          </div>
          {errors[`contact${index}`] && <div className="text-red-500 mt-1">{errors[`contact${index}`]}</div>}
          {index > 0 && (
          <button 
            onClick={() => handleRemoveExperience(index)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 mb-4"
          >
            Remove Experience
          </button>
        )}
        </div>

      ))}

      <button 
        onClick={handleAddExperience}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Add Experience
      </button>
     

      <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps} />
    </div>
  )
}

export default PreviousExperienceContd




// import React, { useContext, useState } from 'react';
// import StepperControl from '../../StepperControl';
// import { StepperContext } from "../../contexts/StepperContext";

// const PreviousExperienceContd = ({ handleClick, currentStep, steps }) => {
//   const { userData, setUserData } = useContext(StepperContext);
//   const [errors, setErrors] = useState({});
//   const [experienceSections, setExperienceSections] = useState(userData.experience || []);

//   const handleExperienceChange = (index, field, value) => {
//     setExperienceSections(prev => {
//       const updated = [...prev];
//       updated[index] = { ...updated[index], [field]: value };
//       return updated;
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     let isValid = true;

//     experienceSections.forEach((experience, index) => {
//       const sectionErrors = {};
      
//       // Validate fromData
//       if (!experience.fromDate || !experience.firmName || !experience.phone || !experience.startingSalary) {
//         sectionErrors.fromData = 'Please fill all fields in the "From" section';
//         isValid = false;
//       }

//       // Validate toData
//       if (!experience.toDate || !experience.street || !experience.city || !experience.zip || !experience.state || !experience.jobTitle || !experience.supervisorName) {
//         sectionErrors.toData = 'Please fill all fields in the "To" section';
//         isValid = false;
//       }

//       // Validate jobData
//       if (!experience.jobTitle || !experience.supervisorName || !experience.supervisorTitle) {
//         sectionErrors.jobData = 'Please fill all fields in the job details section';
//         isValid = false;
//       }

//       if (!experience.responsibilities) {
//         sectionErrors.responsibilities = 'Please fill the Responsibilities';
//         isValid = false;
//       }
//       if (!experience.reasonForLeaving) {
//         sectionErrors.reasonForLeaving = 'Please fill the Reason for Leaving';
//         isValid = false;
//       }
//       if (!experience.contact) {
//         sectionErrors.contact = 'Please select an option for contacting the employer';
//         isValid = false;
//       }

//       newErrors[index] = sectionErrors;
//     });

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setUserData(prevData => ({
//         ...prevData,
//         experience: experienceSections
//       }));
//       handleClick("next");
//     }
//   };

//   const addExperienceSection = () => {
//     setExperienceSections(prev => [
//       ...prev,
//       {
//         fromDate: '',
//         firmName: '',
//         phone: '',
//         startingSalary: '',
//         toDate: '',
//         street: '',
//         city: '',
//         zip: '',
//         state: '',
//         jobTitle: '',
//         supervisorName: '',
//         supervisorTitle: '',
//         responsibilities: '',
//         reasonForLeaving: '',
//         contact: ''
//       }
//     ]);
//   };

//   return (
//     <div className="flex flex-col">
//       <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Previous Experience (Start with current or most recent employer)</h1>
//       {experienceSections.map((experience, index) => (
//         <div key={index}>
//           <table className="table-auto border border-slate-500 mt-9">
//             <thead>
//               <tr>
//                 <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">From (Month/Year)</th>
//                 <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Firm Name</th>
//                 <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Phone</th>
//                 <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Starting Salary</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border border-gray-300">
//                   <input type="text" value={experience.fromDate} onChange={(e) => handleExperienceChange(index, 'fromDate', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" />
//                 </td>
//                 <td className="border border-gray-300">
//                   <input type="text" value={experience.firmName} onChange={(e) => handleExperienceChange(index, 'firmName', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" />
//                 </td>
//                 <td className="border border-gray-300">
//                   <input type="text" value={experience.phone} onChange={(e) => handleExperienceChange(index, 'phone', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" />
//                 </td>
//                 <td className="border border-gray-300">
//                   <input type="text" value={experience.startingSalary} onChange={(e) => handleExperienceChange(index, 'startingSalary', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           {errors[index]?.fromData && <div className="text-red-500 mt-1">{errors[index].fromData}</div>}

//           <table className="table-auto border border-slate-500 mt-9">
//             <thead>
//               <tr>
//                 <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">To (Month/Year)</th>
//                 <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Street</th>
//                 <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">City</th>
//                 <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Zip</th>
//                 <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">State</th>
//                 <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Job Title</th>
//                 <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Name</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border border-gray-300">
//                   <input type="text" value={experience.toDate} onChange={(e) => handleExperienceChange(index, 'toDate', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" />
//                 </td>
//                 <td className="border border-gray-300">
//                   <input type="text" value={experience.street} onChange={(e) => handleExperienceChange(index, 'street', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" />
//                 </td>
//                 <td className="border border-gray-300">
//                   <input type="text" value={experience.city} onChange={(e) => handleExperienceChange(index, 'city', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" />
//                 </td>
//                 <td className="border border-gray-300">
//                   <input type="text" value={experience.zip} onChange={(e) => handleExperienceChange(index, 'zip', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" />
//                 </td>
//                 <td className="border border-gray-300">
//                   <input type="text" value={experience.state} onChange={(e) => handleExperienceChange(index, 'state', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" />
//                 </td>
//                 <td className="border border-gray-300">
//                   <input type="text" value={experience.jobTitle} onChange={(e) => handleExperienceChange(index, 'jobTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" />
//                 </td>
//                 <td className="border border-gray-300">
//                   <input type="text" value={experience.supervisorName} onChange={(e) => handleExperienceChange(index, 'supervisorName', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           {errors[index]?.toData && <div className="text-red-500 mt-1">{errors[index].toData}</div>}

//           <table className="table-auto border border-slate-500 mt-9">
//             <thead>
//               <tr>
//                 <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Job Title</th>
//                 <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Name</th>
//                 <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Supervisor's Title</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border border-gray-300">
//                   <input type="text" value={experience.jobTitle} onChange={(e) => handleExperienceChange(index, 'jobTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" />
//                 </td>
//                 <td className="border border-gray-300">
//                   <input type="text" value={experience.supervisorName} onChange={(e) => handleExperienceChange(index, 'supervisorName', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" />
//                 </td>
//                 <td className="border border-gray-300">
//                   <input type="text" value={experience.supervisorTitle} onChange={(e) => handleExperienceChange(index, 'supervisorTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           {errors[index]?.jobData && <div className="text-red-500 mt-1">{errors[index].jobData}</div>}

//           <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Responsibilities:</div>
//           <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//             <input
//               type="text"
//               value={experience.responsibilities}
//               onChange={(e) => handleExperienceChange(index, 'responsibilities', e.target.value)}
//               className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
//             />
//           </div>
//           {errors[index]?.responsibilities && <div className="text-red-500 mt-1">{errors[index].responsibilities}</div>}

//           <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Reason For Leaving:</div>
//           <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//             <input
//               type="text"
//               value={experience.reasonForLeaving}
//               onChange={(e) => handleExperienceChange(index, 'reasonForLeaving', e.target.value)}
//               className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
//             />
//           </div>
//           {errors[index]?.reasonForLeaving && <div className="text-red-500 mt-1">{errors[index].reasonForLeaving}</div>}

//           <div className="flex gap-5 items-center">
//             <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">May we contact the above employer?</div>
//             <div className="flex gap-3 justify-center items-baseline mt-3">
//               <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">Yes</div>
//               <div>
//                 <input
//                   type="radio"
//                   name={`contactRadio-${index}`}
//                   value="yes"
//                   checked={experience.contact === 'yes'}
//                   onChange={() => handleExperienceChange(index, 'contact', 'yes')}
//                   className="mb-4"
//                 />
//               </div>
//             </div>
//             <div className="flex gap-3 justify-center items-baseline mt-3">
//               <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">No</div>
//               <div>
//                 <input
//                   type="radio"
//                   name={`contactRadio-${index}`}
//                   value="no"
//                   checked={experience.contact === 'no'}
//                   onChange={() => handleExperienceChange(index, 'contact', 'no')}
//                   className="mb-4"
//                 />
//               </div>
//             </div>
//           </div>
//           {errors[index]?.contact && <div className="text-red-500 mt-1">{errors[index].contact}</div>}
//         </div>
//       ))}

//       <button
//         type="button"
//         onClick={addExperienceSection}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Add Experience
//       </button>

//       <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps} />
//     </div>
//   );
// }

// export default PreviousExperienceContd;


