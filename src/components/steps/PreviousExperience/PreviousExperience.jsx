// import React, {  useContext,useState } from 'react';
// import StepperControl from '../../StepperControl';
// import { StepperContext } from "../../contexts/StepperContext";

// const PreviousExperience = ({ handleClick, currentStep, steps }) => {
//   const { userData, setUserData } = useContext(StepperContext);
//   const [errors, setErrors] = useState({});
//   const [fromData, setFromData] = useState(userData.experience?.from || {
//     date: '',
//     firmName: '',
//     phone: '',
//     startingSalary: '',
//   });

//   const [toData, setToData] = useState(userData.experience?.to || {
//     date: '',
//     street: '',
//     city: '',
//     zip: '',
//     state: '',
//     jobTitle: '',
//     supervisorName: '',
//   });

//   const [jobData, setJobData] = useState(userData.experience?.jobs || {
//     jobTitle: '',
//     supervisorName: '',
//     supervisorTitle: '',
//   });

//   const [responsibilities, setResponsibilities] = useState(userData.experience?.responsibilities || '');
//   const [reasonForLeaving, setReasonForLeaving] = useState(userData.experience?.reasonForLeaving || '');
//   const [contact, setContact] = useState(userData.experience?.contact || '');

//   const handleFromDataChange = (field, value) => {
//     setFromData(prev => ({ ...prev, [field]: value }));
//   }

//   const handleToDataChange = (field, value) => {
//     setToData(prev => ({ ...prev, [field]: value }));
//   }

//   const handleJobDataChange = (field, value) => {
//     setJobData(prev => ({ ...prev, [field]: value }));
//   }

//   const handleResponsibilitiesChange = (e) => {
//     setResponsibilities(e.target.value);
//   }

//   const handleReasonForLeavingChange = (e) => {
//     setReasonForLeaving(e.target.value);
//   }

//   const handleContactChange = (value) => {
//     setContact(value);
//   }

//   console.log(fromData);
//   console.log(toData);
//   console.log(jobData);

//   const validateForm = () => {
//     const newErrors = {};
//     let isValid = true;

//     // Validate fromData
//     if (!fromData.date || !fromData.firmName || !fromData.phone || !fromData.startingSalary) {
//       newErrors.fromData = 'Please fill all fields in the "From" section';
//       isValid = false;
//     }

//     // Validate toData
//     if (!toData.date || !toData.street || !toData.city || !toData.zip || !toData.state || !toData.jobTitle || !toData.supervisorName) {
//       newErrors.toData = 'Please fill all fields in the "To" section';
//       isValid = false;
//     }

//     // Validate jobData
//     if (!jobData.jobTitle || !jobData.supervisorName || !jobData.supervisorTitle) {
//       newErrors.jobData = 'Please fill all fields in the job details section';
//       isValid = false;
//     }

//     if (responsibilities === '') {
//       newErrors.responsibilities = 'Please fill the Responsibilities';
//       isValid = false;
//     }
//     if (reasonForLeaving === '') {
//       newErrors.reasonForLeaving = 'Please fill the Reason for Leaving';
//       isValid = false;
//     }
//     if (contact === '') {
//       newErrors.contact = 'Please select an option for contacting the employer';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setUserData(prevData => ({
//         ...prevData,
//         experience: {
//           from: fromData,
//           to: toData,
//           jobs: jobData,
//           responsibilities,
//           reasonForLeaving,
//           contact
//         }
//       }));
//       handleClick("next");
//     }
//   };
//   return (
//     <div className="flex flex-col">
//       <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Previous Experience (Start with current or most recent employer)</h1>
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
//             <td className="border border-gray-300"> <input type="text" value={fromData.date} onChange={(e) => handleFromDataChange('date', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" value={fromData.firmName} onChange={(e) => handleFromDataChange('firmName', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text"  value={fromData.phone} onChange={(e) => handleFromDataChange('phone', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text"  value={fromData.startingSalary} onChange={(e) => handleFromDataChange('startingSalary', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//           </tr>
//         </tbody>
//       </table>
//       {errors.fromData && <div className="text-red-500 mt-1">{errors.fromData}</div>}

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
//             <td className="border border-gray-300"> <input type="text" value={toData.date} onChange={(e) => handleToDataChange('date', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" value={toData.street} onChange={(e) => handleToDataChange('street', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" value={toData.city} onChange={(e) => handleToDataChange('city', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" value={toData.zip} onChange={(e) => handleToDataChange('zip', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300"> <input type="text" value={toData.state} onChange={(e) => handleToDataChange('state', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" value={toData.jobTitle} onChange={(e) => handleToDataChange('jobTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text" value={toData.supervisorName} onChange={(e) => handleToDataChange('supervisorName', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//           </tr>
//         </tbody>
//       </table>
//       {errors.toData && <div className="text-red-500 mt-1">{errors.toData}</div>}

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
//             <td className="border border-gray-300"> <input type="text" value={jobData.jobTitle} onChange={(e) => handleJobDataChange('jobTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text"  value={jobData.supervisorName} onChange={(e) => handleJobDataChange('supervisorName', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//             <td className="border border-gray-300 "> <input type="text"  value={jobData.supervisorTitle} onChange={(e) => handleJobDataChange('supervisorTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//           </tr>
//         </tbody>
//       </table>
//       {errors.jobData && <div className="text-red-500 mt-1">{errors.jobData}</div>}

//       <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"> Responsibilities:</div>
//       <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//         <input 
//           type="text" 
//           value={responsibilities}
//           onChange={handleResponsibilitiesChange}
//           className="p-1 px-2 appearance-none outline-none w-full text-gray-800" 
//         />
//       </div>
//       {errors.responsibilities && <div className="text-red-500 mt-1">{errors.responsibilities}</div>}

//       <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Reason For Leaving:</div>
//       <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//         <input 
//           type="text" 
//           value={reasonForLeaving}
//           onChange={handleReasonForLeavingChange}
//           className="p-1 px-2 appearance-none outline-none w-full text-gray-800" 
//         />
//       </div>
//       {errors.reasonForLeaving && <div className="text-red-500 mt-1">{errors.reasonForLeaving}</div>}

//       <div className="flex gap-5 items-center">
//         <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">May we contact the above employer?</div>
//         <div className="flex gap-3 justify-center items-baseline mt-3">
//           <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> Yes</div>
//           <div> 
//             <input 
//               type="radio" 
//               name="contactRadio" 
//               value="yes"
//               checked={contact === 'yes'}
//               onChange={() => handleContactChange('yes')}
//               className="mb-4" 
//             />
//           </div>
//         </div>
//         <div className="flex gap-3 justify-center items-baseline mt-3">
//           <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> No</div>
//           <div>
//             <input 
//               type="radio"  
//               name="contactRadio" 
//               value="no"
//               checked={contact === 'no'}
//               onChange={() => handleContactChange('no')}
//               className="mb-4" 
//             />
//           </div>
//         </div>
//       </div>
//       {errors.contact && <div className="text-red-500 mt-1">{errors.contact}</div>}


//       <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps} />
//     </div>


//   )
// }

// export default PreviousExperience




import StepperControl from '../../StepperControl';

  const PreviousExperience = ({ handleClick, currentStep, steps, experiences = [], updateExperiences, errors, validateForm }) => {
    console.log('Experiences:', experiences);
    const handleFromDataChange = (index, field, value) => {
      const newExperiences = [...experiences];
      newExperiences[index].from[field] = value;
      updateExperiences(newExperiences);
    }
    
    const handleToDataChange = (index, field, value) => {
      const newExperiences = [...experiences];
      newExperiences[index].to[field] = value;
      updateExperiences(newExperiences);
    }
    
    const handleJobDataChange = (index, field, value) => {
      const newExperiences = [...experiences];
      newExperiences[index].job[field] = value;
      updateExperiences(newExperiences);
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleClick("next");
    }
  };


  return (
    <div className="flex flex-col">
    <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Previous Experience</h1>

    {experiences && experiences.length > 0 ? (
      experiences.map((experience, index) => (
         <div key={index}>
        {/* From section */}
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
             <td className="border border-gray-300"> <input type="text" value={experience.from.date}  onChange={(e) => handleFromDataChange(index, 'date', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
             <td className="border border-gray-300 "> <input type="text" value={experience.from.firmName} onChange={(e) => handleFromDataChange(index, 'firmName', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
             <td className="border border-gray-300 "> <input type="text" value={experience.from.phone} onChange={(e) => handleFromDataChange(index, 'phone', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
             <td className="border border-gray-300 "> <input type="text" value={experience.from.startingSalary} onChange={(e) => handleFromDataChange(index, 'startingSalary', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
           </tr>
        </tbody>
        </table>
        {errors[`from${index}`] && <div className="text-red-500 mt-1">{errors[`from${index}`]}</div>}

        {/* To section */}
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
             <td className="border border-gray-300"> <input type="text" value={experience.to.date} onChange={(e) => handleFromDataChange(index, 'date', e.target.value)}  className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
             <td className="border border-gray-300 "> <input type="text" value={experience.to.street} onChange={(e) => handleFromDataChange(index, 'street', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
             <td className="border border-gray-300 "> <input type="text" value={experience.to.city} onChange={(e) => handleFromDataChange(index, 'city', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
             <td className="border border-gray-300 "> <input type="text" value={experience.to.zip} onChange={(e) => handleFromDataChange(index, 'zip', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
             <td className="border border-gray-300"> <input type="text" value={experience.to.state} onChange={(e) => handleFromDataChange(index, 'state', e.target.value)}  className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
             <td className="border border-gray-300 "> <input type="text" value={experience.to.jobTitle} onChange={(e) => handleFromDataChange(index, 'jobTitle', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
             <td className="border border-gray-300 "> <input type="text" value={experience.to.supervisorName} onChange={(e) => handleFromDataChange(index, 'supervisorName', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
           </tr>
         </tbody>
        </table>
        {errors[`to${index}`] && <div className="text-red-500 mt-1">{errors[`to${index}`]}</div>}

        {/* Job section */}
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
             <td className="border border-gray-300"> <input type="text" value={experience.job.jobTitle} onChange={(e) => handleFromDataChange(index, 'jobTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
             <td className="border border-gray-300 "> <input type="text"  value={experience.job.supervisorName} onChange={(e) => handleFromDataChange(index, 'supervisorName', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
             <td className="border border-gray-300 "> <input type="text"  value={experience.job.supervisorTitle} onChange={(e) => handleFromDataChange(index, 'supervisorTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
           </tr>
         </tbody>
        </table>
        {errors[`job${index}`] && <div className="text-red-500 mt-1">{errors[`job${index}`]}</div>}

        {/* Responsibilities */}
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Responsibilities:</div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input 
            type="text" 
            value={experience.responsibilities}
            onChange={(e) => {
              const newExperiences = [...experiences];
              newExperiences[index].responsibilities = e.target.value;
              updateExperiences(newExperiences);
            }}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800" 
          />
        </div>
        {errors[`responsibilities${index}`] && <div className="text-red-500 mt-1">{errors[`responsibilities${index}`]}</div>}

        {/* Reason for Leaving */}
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Reason For Leaving:</div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input 
            type="text" 
            value={experience.reasonForLeaving}
            onChange={(e) => {
              const newExperiences = [...experiences];
              newExperiences[index].reasonForLeaving = e.target.value;
              updateExperiences(newExperiences);
            }}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800" 
          />
        </div>
        {errors[`reasonForLeaving${index}`] && <div className="text-red-500 mt-1">{errors[`reasonForLeaving${index}`]}</div>}

        {/* Contact */}
        <div className="flex gap-5 items-center">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">May we contact the above employer?</div>
          <div className="flex gap-3 justify-center items-baseline mt-3">
            <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> Yes</div>
            <input 
              type="radio" 
              name={`contactRadio${index}`}
              value="yes"
              checked={experience.contact === 'yes'}
              onChange={() => {
                const newExperiences = [...experiences];
                newExperiences[index].contact = 'yes';
                updateExperiences(newExperiences);
              }}
              className="mb-4" 
            />
            <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> No</div>
            <input 
              type="radio"  
              name={`contactRadio${index}`}
              value="no"
              checked={experience.contact === 'no'}
              onChange={() => {
                const newExperiences = [...experiences];
                newExperiences[index].contact = 'no';
                updateExperiences(newExperiences);
              }}
              className="mb-4" 
            />
          </div>
        </div>
        {errors[`contact${index}`] && <div className="text-red-500 mt-1">{errors[`contact${index}`]}</div>}
      </div>
      ))
    ) : (
      <p>No previous experience added yet.</p>
    )}
    <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps} />
  </div>
  );
  };

export default PreviousExperience;

