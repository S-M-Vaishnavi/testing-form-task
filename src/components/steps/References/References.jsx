import React, { useContext, useState, useEffect } from 'react';
import StepperControl from '../../StepperControl'; 
import { StepperContext } from "../../contexts/StepperContext";

const References = ({ handleClick, currentStep, steps }) => {
  const { userData, setUserData } = useContext(StepperContext);
  const [errors, setErrors] = useState([]);
  const [references, setReferences] = useState([
    { name: '', organization: '', relationship: '', telephoneNumber: '' },
    { name: '', organization: '', relationship: '', telephoneNumber: '' },
    { name: '', organization: '', relationship: '', telephoneNumber: '' }
  ]);
  const [globalError, setGlobalError] = useState('');

  useEffect(() => {
    if (userData && Array.isArray(userData.references)) {
      setReferences(userData.references.map(ref => ({
        name: ref.name || '',
        organization: ref.organization || '',
        relationship: ref.relationship || '',
        telephoneNumber: ref.telephoneNumber || '',
      })));
    }
  }, [userData]);

  const handleChange = (index, field, value) => {
    const newReferences = [...references];
    newReferences[index][field] = value;
    setReferences(newReferences);

    const newErrors = [...errors];
    if (newErrors[index]) {
      newErrors[index][field] = '';
      setErrors(newErrors);
    }

    setUserData(prevState => ({
      ...prevState,
      references: newReferences,
    }));
  };

  const validateInputs = () => {
    const newErrors = references.map(ref => {
      const refErrors = {};
      const isEmptyRow = !ref.name && !ref.organization && !ref.relationship && !ref.telephoneNumber;
      if (!isEmptyRow) {
        if (!ref.name) refErrors.name = "Name is required";
        if (!ref.organization) refErrors.organization = "Organization is required";
        if (!ref.relationship) refErrors.relationship = "Relationship is required";
        if (!ref.telephoneNumber) refErrors.telephoneNumber = "Telephone number is required";
      }
      return refErrors;
    });

    const allRowsEmpty = references.every(ref => !ref.name && !ref.organization && !ref.relationship && !ref.telephoneNumber);
    if (allRowsEmpty) {
      setGlobalError('Please fill in at least one reference.');
      return newErrors.map(() => ({ globalError: 'Please fill in at least one reference.' }));
    } else {
      setGlobalError('');
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    if (validationErrors.every(ref => Object.keys(ref).length === 0)) {
      handleClick("next", true);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        Please provide the names of three professional references, not related to you, who can best provide pertinent information as to your 
        character and capabilities for the position you are applying or being considered for SBC.
      </div>
      <table className="table-auto border border-slate-500 mt-[70px]">
        <thead>
          <tr>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Name/Title:</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Organization:</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Relationship:</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Telephone number:</th>
          </tr>
        </thead>
        <tbody>
          {references.map((reference, index) => (
            <tr key={index}>
              <td className="border border-gray-300">
                <input
                  type="text"
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
                  value={reference.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                />
                {errors[index] && errors[index].name && <span className='text-red-500'>{errors[index].name}</span>}
              </td>
              <td className="border border-gray-300">
                <input
                  type="text"
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
                  value={reference.organization}
                  onChange={(e) => handleChange(index, 'organization', e.target.value)}
                />
                {errors[index] && errors[index].organization && <span className='text-red-500'>{errors[index].organization}</span>}
              </td>
              <td className="border border-gray-300">
                <input
                  type="text"
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
                  value={reference.relationship}
                  onChange={(e) => handleChange(index, 'relationship', e.target.value)}
                />
                {errors[index] && errors[index].relationship && <span className='text-red-500'>{errors[index].relationship}</span>}
              </td>
              <td className="border border-gray-300">
                <input
                  type="text"
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
                  value={reference.telephoneNumber}
                  onChange={(e) => handleChange(index, 'telephoneNumber', e.target.value)}
                />
                {errors[index] && errors[index].telephoneNumber && <span className='text-red-500'>{errors[index].telephoneNumber}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {globalError && <div className="text-red-500">{globalError}</div>}

      <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps} />
    </div>
  );
};

export default References;
