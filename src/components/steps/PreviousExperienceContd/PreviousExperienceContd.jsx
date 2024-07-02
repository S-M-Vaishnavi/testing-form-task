// import React, { useContext, useState } from 'react';
// import StepperControl from '../../StepperControl';
// import { StepperContext } from "../../contexts/StepperContext";

// const PreviousExperienceContd = ({ handleClick, currentStep, steps }) => {
//   const { userData, setUserData } = useContext(StepperContext);
//   const [errors, setErrors] = useState({});
//   const [experiences, setExperiences] = useState(
//     userData.experiences || [
//       {
//         from: {
//           date: '',
//           firmName: '',
//           phone: '',
//           startingSalary: '',
//         },
//         to: {
//           date: '',
//           street: '',
//           city: '',
//           zip: '',
//           state: '',
//           jobTitle: '',
//           supervisorName: '',
//         },
//         job: {
//           jobTitle: '',
//           supervisorName: '',
//           supervisorTitle: '',
//         },
//         responsibilities: '',
//         reasonForLeaving: '',
//         contact: '',
//       }
//     ]
//   );

//   const handleFromDataChange = (index, field, value) => {
//     const newExperiences = [...experiences];
//     newExperiences[index].from[field] = value;
//     setExperiences(newExperiences);
//   }

//   const handleToDataChange = (index, field, value) => {
//     const newExperiences = [...experiences];
//     newExperiences[index].to[field] = value;
//     setExperiences(newExperiences);
//   }

//   const handleJobDataChange = (index, field, value) => {
//     const newExperiences = [...experiences];
//     newExperiences[index].job[field] = value;
//     setExperiences(newExperiences);
//   }

//   const handleResponsibilitiesChange = (index, value) => {
//     const newExperiences = [...experiences];
//     newExperiences[index].responsibilities = value;
//     setExperiences(newExperiences);
//   }

//   const handleReasonForLeavingChange = (index, value) => {
//     const newExperiences = [...experiences];
//     newExperiences[index].reasonForLeaving = value;
//     setExperiences(newExperiences);
//   }

//   const handleContactChange = (index, value) => {
//     const newExperiences = [...experiences];
//     newExperiences[index].contact = value;
//     setExperiences(newExperiences);
//   }

//   const validateForm = () => {
//     const newErrors = {};
//     let isValid = true;

//     experiences.forEach((exp, index) => {
//       if (!exp.from.date || !exp.from.firmName || !exp.from.phone || !exp.from.startingSalary) {
//         newErrors[`fromData${index}`] = 'Please fill all fields in the "From" section';
//         isValid = false;
//       }

//       if (!exp.to.date || !exp.to.street || !exp.to.city || !exp.to.zip || !exp.to.state || !exp.to.jobTitle || !exp.to.supervisorName) {
//         newErrors[`toData${index}`] = 'Please fill all fields in the "To" section';
//         isValid = false;
//       }

//       if (!exp.job.jobTitle || !exp.job.supervisorName || !exp.job.supervisorTitle) {
//         newErrors[`jobData${index}`] = 'Please fill all fields in the job details section';
//         isValid = false;
//       }

//       if (exp.responsibilities === '') {
//         newErrors[`responsibilities${index}`] = 'Please fill the Responsibilities';
//         isValid = false;
//       }
//       if (exp.reasonForLeaving === '') {
//         newErrors[`reasonForLeaving${index}`] = 'Please fill the Reason for Leaving';
//         isValid = false;
//       }
//       if (exp.contact === '') {
//         newErrors[`contact${index}`] = 'Please select an option for contacting the employer';
//         isValid = false;
//       }
//     });

//     setErrors(newErrors);
//     return isValid;
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setUserData(prevData => ({
//         ...prevData,
//         experiences: experiences
//       }));
//       handleClick("next");
//     }
//   };


//   const handleAddExperience = () => {
//     setExperiences([...experiences, {
//       from: { date: '', firmName: '', phone: '', startingSalary: '' },
//       to: { date: '', street: '', city: '', zip: '', state: '', jobTitle: '', supervisorName: '' },
//       job: { jobTitle: '', supervisorName: '', supervisorTitle: '' },
//       responsibilities: '',
//       reasonForLeaving: '',
//       contact: '',
//     }]);
//   }

//   const handleRemoveExperience = (index) => {
//     setExperiences(experiences.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="flex flex-col">
//       <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Previous Experience (Start with current or most recent employer)</h1>
      
//       {experiences.map((experience, index) => (
//         <div key={index} className="mb-10">
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
//                 <td className="border border-gray-300"> <input type="text" value={experience.from.date} onChange={(e) => handleFromDataChange(index, 'date', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//                 <td className="border border-gray-300 "> <input type="text" value={experience.from.firmName} onChange={(e) => handleFromDataChange(index, 'firmName', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//                 <td className="border border-gray-300 "> <input type="text"  value={experience.from.phone} onChange={(e) => handleFromDataChange(index, 'phone', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//                 <td className="border border-gray-300 "> <input type="text"  value={experience.from.startingSalary} onChange={(e) => handleFromDataChange(index, 'startingSalary', e.target.value)}  className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               </tr>
//             </tbody>
//           </table>
//           {errors[`fromData${index}`] && <div className="text-red-500 mt-1">{errors[`fromData${index}`]}</div>}

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
//                 <td className="border border-gray-300"> <input type="text" value={experience.to.date} onChange={(e) => handleToDataChange(index, 'date', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//                 <td className="border border-gray-300 "> <input type="text" value={experience.to.street} onChange={(e) => handleToDataChange(index, 'street', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//                 <td className="border border-gray-300 "> <input type="text" value={experience.to.city} onChange={(e) => handleToDataChange(index, 'city', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//                 <td className="border border-gray-300 "> <input type="text" value={experience.to.zip} onChange={(e) => handleToDataChange(index, 'zip', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//                 <td className="border border-gray-300"> <input type="text" value={experience.to.state} onChange={(e) => handleToDataChange(index, 'state', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//                 <td className="border border-gray-300 "> <input type="text" value={experience.to.jobTitle} onChange={(e) => handleToDataChange(index, 'jobTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//                 <td className="border border-gray-300 "> <input type="text" value={experience.to.supervisorName} onChange={(e) => handleToDataChange(index, 'supervisorName', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               </tr>
//             </tbody>
//           </table>
//           {errors[`toData${index}`] && <div className="text-red-500 mt-1">{errors[`toData${index}`]}</div>}

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
//                 <td className="border border-gray-300"> <input type="text" value={experience.job.jobTitle} onChange={(e) => handleJobDataChange(index, 'jobTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1  focus:outline-none" /></td>
//                 <td className="border border-gray-300 "> <input type="text"  value={experience.job.supervisorName} onChange={(e) => handleJobDataChange(index, 'supervisorName', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//                 <td className="border border-gray-300 "> <input type="text"  value={experience.job.supervisorTitle} onChange={(e) => handleJobDataChange(index, 'supervisorTitle', e.target.value)} className="w-full border border-gray-300 px-2 py-1 focus:outline-none" /></td>
//               </tr>
//             </tbody>
//           </table>
//           {errors[`jobData${index}`] && <div className="text-red-500 mt-1">{errors[`jobData${index}`]}</div>}

//           <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"> Responsibilities:</div>
//           <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//             <input 
//               type="text" 
//               value={experience.responsibilities}
//               onChange={(e) => handleResponsibilitiesChange(index, e.target.value)}
//               className="p-1 px-2 appearance-none outline-none w-full text-gray-800" 
//             />
//           </div>
//           {errors[`responsibilities${index}`] && <div className="text-red-500 mt-1">{errors[`responsibilities${index}`]}</div>}

//           <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Reason For Leaving:</div>
//           <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
//             <input 
//               type="text" 
//               value={experience.reasonForLeaving}
//               onChange={(e) => handleReasonForLeavingChange(index, e.target.value)}
//               className="p-1 px-2 appearance-none outline-none w-full text-gray-800" 
//             />
//           </div>
//           {errors[`reasonForLeaving${index}`] && <div className="text-red-500 mt-1">{errors[`reasonForLeaving${index}`]}</div>}

//           <div className="flex gap-5 items-center">
//             <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">May we contact the above employer?</div>
//             <div className="flex gap-3 justify-center items-baseline mt-3">
//               <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> Yes</div>
//               <div> 
//                 <input 
//                   type="radio" 
//                   name={`contactRadio${index}`} 
//                   value="yes"
//                   checked={experience.contact === 'yes'}
//                   onChange={() => handleContactChange(index, 'yes')}
//                   className="mb-4" 
//                 />
//               </div>
//               <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase"> No</div>
//               <div>
//                 <input 
//                   type="radio"  
//                   name={`contactRadio${index}`} 
//                   value="no"
//                   checked={experience.contact === 'no'}
//                   onChange={() => handleContactChange(index, 'no')}
//                   className="mb-4" 
//                 />
//               </div>
//             </div>
//           </div>
//           {errors[`contact${index}`] && <div className="text-red-500 mt-1">{errors[`contact${index}`]}</div>}
//           {index > 0 && (
//           <button 
//             onClick={() => handleRemoveExperience(index)}
//             className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 mb-4"
//           >
//             Remove Experience
//           </button>
//         )}
//         </div>

//       ))}

//       <button 
//         onClick={handleAddExperience}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//       >
//         Add Experience
//       </button>
     

//       <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps} />
//     </div>
//   )
// }

// export default PreviousExperienceContd


import StepperControl from '../../StepperControl';

  const PreviousExperienceContd = ({ handleClick, currentStep, steps, experiences, updateExperiences, errors, validateForm }) => {

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
    <h1 className="font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Previous Experience</h1>
    
    {experiences.map((experience, index) => (
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
);
};

export default PreviousExperienceContd;