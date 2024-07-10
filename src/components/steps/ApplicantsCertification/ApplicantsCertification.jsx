import React, { useContext, useState, useEffect } from 'react';
import StepperControl from '../../StepperControl';
import { StepperContext } from "../../contexts/StepperContext";
import axios from 'axios';

const ApplicantsCertification = ({ handleClick, currentStep, steps }) => {
  const { userData, setUserData } = useContext(StepperContext);
  const [applicantsCertify, setApplicantsCertify] = useState({
    signature: '',
    date: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (userData) {
      setApplicantsCertify({
        signature: userData.signature || '',
        date: userData.date || '',
      });
    }
  }, [userData]);

  const handleErrors = () => {
    let newErrors = {};
    if (!applicantsCertify.signature) {
      newErrors.signature = "Please Sign the Application";
    }
    if (!applicantsCertify.date) {
      newErrors.date = "Please give the date";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicantsCertify(prevState => ({
      ...prevState, [name]: value
    }));
    setErrors(prevState => ({
      ...prevState, [name]: ''
    }));
    setUserData(prevState => ({
      ...prevState, [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
        fullName: userData.fullName,
        currentPhnNo: userData.currentPhoneNumber,
        currentFaxNo: userData.currentFaxNumber,
        email: userData.email,
        address: userData.address,
        positionDesired: userData.positionDesired,
        presentSalary: userData.presentSalary,
        salaryDesired: userData.salaryDesired,
        startDate: userData.startDate,
        timePreference: userData.timePreference,
        everApplied: userData.everApplied,
        when: userData.when,
        findWhere: userData.findWhere,
        legallyPermitted: userData.legallyPermitted,
        status: userData.status,
        crime: userData.crime,
        education: userData.education ? JSON.stringify(userData.education) : '',
        preExperience: JSON.stringify(userData.preExperience),
        preExperienceContd: JSON.stringify(userData.experiences),
        additionalQualities: userData.additionalQualities,
        references: JSON.stringify(userData.references),
        firstName: userData.firstName,
        lastName: userData.lastName,
        miNo: userData.miNo,
        socialSecurityNo: userData.socialSecurityNumber,
        otherNamesUsed: userData.otherNamesUsed,
        listOfAddressLived: JSON.stringify(userData.listOfAddressLived),
        signature: userData.signature,
        date: userData.date,
    };

    if (handleErrors()) {
        try {
            let res = await axios.post("http://localhost:8000/api/user", data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(res.data);
            console.log(data);
            handleClick("next", true);
        } catch (error) {
            console.error('Error creating user:', error.response.data);
        }
    }
};


  return (
    <div className="flex flex-col">
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-4 uppercase">
        I hereby certify that all statements made in this application and in the pre-employment process are true and correct to the best of my knowledge and belief. I understand and agree that any
        misrepresentation or omission of facts in my application or in the pre-employment process may result in rejection of my application, or termination of employment.
      </div>

      <div className="font-bold h-6 mt-10 text-gray-500 text-xs leading-4 uppercase md:mt-[63px]">
        I understand an employee of SB & Company, LLC may make an investigation as to my character and general reputation. I authorize all current and past employers, schools, persons,
        and organizations having relevant information or knowledge to provide it to SB & Company, LLC or its designee, whether or not it is on their records. I hereby release SB & Company, LLC, its representatives and all such employers, schools, persons and organizations from all liability in making or responding to inquiries connected with my application.
      </div>

      <div className="font-bold h-6 mt-[70px] text-gray-500 text-xs leading-4 uppercase">
        I understand that an employment relationship is established, my employment can be terminated at any time, with or without notice or cause, at the option of SB & Company, LLC or myself. I further understand that nothing contained in this
        application or in the interview and communication process between me and SB & Company, LLC or any SB & Company, LLC representative stated or implied, is intended to create an employment contract or any other binding obligation on SB & Company, LLC.
      </div>

      <div className="font-bold h-6 2xl:mt-[60px] mt-[60px] text-gray-500 text-xs leading-4 uppercase  md:mt-[88px]">
        Further, if granted a position with SB & Company, LLC, I will comply with all of SB & Company, LLC policies and procedures, a copy of which will be provided to me at the time of my first week of employment.
      </div>

      <div className="font-bold h-6 mt-[30px] text-gray-500 text-xs leading-4 uppercase">
        Under Maryland law, an employer may not require or demand, as a condition of employment, perspective employment, or continued employment, that an individual submit to or take a lie detector or similar test. An employer who violates this law is guilty of a
        misdemeanor and subject to a fine not exceeding $100.
      </div>

      <div className="font-bold h-6 mt-[40px] text-gray-500 text-xs leading-4 uppercase">
        In signing this form, I certify that I understand all the questions and statements in this application.
      </div>

      <div className="font-bold h-6 mt-5 text-gray-500 text-xs leading-4 uppercase">Acknowledge:</div>
      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-4 uppercase">Signature of Applicant:</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input
          type="text"
          name="signature"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          value={applicantsCertify.signature}
          onChange={handleChange}
        />
      </div>
      {errors.signature && <span className='text-red-500 mb-2'>{errors.signature}</span>}

      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-4 uppercase">Date:</div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <input
          type="date"
          name="date"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          value={applicantsCertify.date}
          onChange={handleChange}
        />
      </div>
      {errors.date && <span className='text-red-500 mb-2'>{errors.date}</span>}

      <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-4 uppercase">
        EEO Statement: SB & Company, LLC is an equal opportunity employer and will not discriminate against any application for employment on the basis of race, color, religion, sex, age, national origin, veteran status,
        disability, or any other basis prohibited by law.
      </div>

      <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps} />
    </div>
  );
}

export default ApplicantsCertification;
