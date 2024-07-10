import React, { useState, useContext, useEffect } from 'react';
import StepperControl from '../../StepperControl';
import { StepperContext } from "../../contexts/StepperContext";

const BackGroundData = ({ handleClick, currentStep, steps }) => {
  const { userData, setUserData } = useContext(StepperContext);
  const [errors, setErrors] = useState({});
  const [backGroundData, setBackGroundData] = useState({
    bgData: {
      firstName: '',
      lastName: '',
      mi: '',
      socialSecurityNumber: '',
      otherNamesUsed: '',
    },
    listOfAddressLived: [
      { street: '', city: '', state: '', zip: '', datesFromTo: '' },
      { street: '', city: '', state: '', zip: '', datesFromTo: '' },
      { street: '', city: '', state: '', zip: '', datesFromTo: '' },
      { street: '', city: '', state: '', zip: '', datesFromTo: '' },
    ]
  });
 console.log(backGroundData);
  useEffect(() => {
    if (userData) {
      setBackGroundData({
        bgData: {
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          mi: userData.mi || '',
          socialSecurityNumber: userData.socialSecurityNumber || '',
          otherNamesUsed: userData.otherNamesUsed || '',
        },
        listOfAddressLived: userData.listOfAddressLived || [
          { street: '', city: '', state: '', zip: '', datesFromTo: '' },
          { street: '', city: '', state: '', zip: '', datesFromTo: '' },
          { street: '', city: '', state: '', zip: '', datesFromTo: '' },
          { street: '', city: '', state: '', zip: '', datesFromTo: '' },
        ]
      });
    }
  }, [userData]);

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    // Validate bgData
    if (!backGroundData.bgData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }
    if (!backGroundData.bgData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }
    if (!backGroundData.bgData.mi.trim()) {
      newErrors.mi = "MI is required";
      isValid = false;
    }
    if (!backGroundData.bgData.socialSecurityNumber.trim()) {
      newErrors.socialSecurityNumber = "Social Security Number is required";
      isValid = false;
    } 
    if (!backGroundData.bgData.otherNamesUsed.trim()) {
      newErrors.otherNamesUsed = "Other Names Used is required";
      isValid = false;
    }

    // Validate at least one address
    const hasValidAddress = backGroundData.listOfAddressLived.some(address => 
      address.street.trim() && address.city.trim() && address.state.trim() && 
      address.zip.trim() && address.datesFromTo.trim()
    );

    if (!hasValidAddress) {
      newErrors.address = "At least one complete address is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e, section, index = null) => {
    const { name, value } = e.target;
    setBackGroundData(prevData => {
      if (section === 'bgData') {
        return { ...prevData, bgData: { ...prevData.bgData, [name]: value } };
      } else if (section === 'listOfAddressLived') {
        const newList = [...prevData.listOfAddressLived];
        newList[index] = { ...newList[index], [name]: value };
        return { ...prevData, listOfAddressLived: newList };
      }
      return prevData;
    });

    setErrors(prevErrors => {
      const newErrors = { ...prevErrors };
      if (section === 'bgData' && value.trim()) {
        delete newErrors[name];
      } else if (section === 'listOfAddressLived' && value.trim()) {
        delete newErrors.address;
      }
      return newErrors;
    });
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setUserData(prevUserData => ({ 
        ...prevUserData, 
        ...backGroundData.bgData, 
        listOfAddressLived: backGroundData.listOfAddressLived.filter(address => 
          address.street.trim() || address.city.trim() || address.state.trim() || 
          address.zip.trim() || address.datesFromTo.trim()
        )
      }));
      handleClick("next");
    }
  };


  return (
    <div className="flex flex-col">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">Background data</div>
      <table className="table-auto border border-slate-500 mt-[20px]">
        <thead>
          <tr>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">First Name:</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Last Name:</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">M.I:</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Social Security Number:</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Other Names Used:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300">
              <input
                type="text"
                name="firstName"
                value={backGroundData.bgData.firstName}
                onChange={(e) => handleChange(e, 'bgData')}
                className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
              />
              {errors.firstName && <div className="text-red-500 text-xs">{errors.firstName}</div>}
            </td>
            <td className="border border-gray-300">
              <input
                type="text"
                name="lastName"
                value={backGroundData.bgData.lastName}
                onChange={(e) => handleChange(e, 'bgData')}
                className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
              />
              {errors.lastName && <div className="text-red-500 text-xs">{errors.lastName}</div>}
            </td>
            <td className="border border-gray-300">
              <input
                type="text"
                name="mi"
                value={backGroundData.bgData.mi}
                onChange={(e) => handleChange(e, 'bgData')}
                className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
              />
            {errors.mi && <div className="text-red-500 text-xs">{errors.mi}</div>}

            </td>
            <td className="border border-gray-300">
              <input
                type="text"
                name="socialSecurityNumber"
                value={backGroundData.bgData.socialSecurityNumber}
                onChange={(e) => handleChange(e, 'bgData')}
                className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
              />
              {errors.socialSecurityNumber && <div className="text-red-500 text-xs">{errors.socialSecurityNumber}</div>}
            </td>
            <td className="border border-gray-300">
              <input
                type="text"
                name="otherNamesUsed"
                value={backGroundData.bgData.otherNamesUsed}
                onChange={(e) => handleChange(e, 'bgData')}
                className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
              />
            {errors.otherNamesUsed && <div className="text-red-500 text-xs">{errors.otherNamesUsed}</div>}

            </td>
          </tr>
        </tbody>
      </table>

      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        Please list addresses of places you have lived over the previous five years:
      </div>
      <table className="table-auto border border-slate-500 mt-[20px]">
        <thead>
          <tr>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Street</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">City</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">State</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Zip</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Dates (From-To)</th>
          </tr>
        </thead>
        <tbody>
          {backGroundData.listOfAddressLived.map((address, index) => (
            <tr key={index}>
              <td className="border border-gray-300">
                <input
                  type="text"
                  name="street"
                  value={address.street}
                  onChange={(e) => handleChange(e, 'listOfAddressLived', index)}
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
                />
              </td>
              <td className="border border-gray-300">
                <input
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={(e) => handleChange(e, 'listOfAddressLived', index)}
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
                />
              </td>
              <td className="border border-gray-300">
                <input
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={(e) => handleChange(e, 'listOfAddressLived', index)}
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
                />
              </td>
              <td className="border border-gray-300">
                <input
                  type="text"
                  name="zip"
                  value={address.zip}
                  onChange={(e) => handleChange(e, 'listOfAddressLived', index)}
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
                />
              </td>
              <td className="border border-gray-300">
                <input
                  type="text"
                  name="datesFromTo"
                  value={address.datesFromTo}
                  onChange={(e) => handleChange(e, 'listOfAddressLived', index)}
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {errors.address && <div className="text-red-500 text-xs mt-2">{errors.address}</div>}
      <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps} />
    </div>
  );
};

export default BackGroundData;