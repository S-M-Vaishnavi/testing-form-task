import React, { useState, useContext } from 'react';
import { StepperContext } from "../../contexts/StepperContext";
import PreviousExperience from '../PreviousExperience/PreviousExperience';
import PreviousExperienceContd from '../PreviousExperienceContd/PreviousExperienceContd';

const ExperienceWrapper = ({ handleClick, currentStep, steps }) => {
  const { userData, setUserData } = useContext(StepperContext);
  const [experiences, setExperiences] = useState(
    userData.experiences || [
      {
        from: { date: '', firmName: '', phone: '', startingSalary: '' },
        to: { date: '', street: '', city: '', zip: '', state: '', jobTitle: '', supervisorName: '' },
        job: { jobTitle: '', supervisorName: '', supervisorTitle: '' },
        responsibilities: '',
        reasonForLeaving: '',
        contact: '',
      }
    ]
  );
  
  const [experiencesContd, setExperiencesContd] = useState(
    userData.experiencesContd || [
      {
        from: { date: '', firmName: '', phone: '', startingSalary: '' },
        to: { date: '', street: '', city: '', zip: '', state: '', jobTitle: '', supervisorName: '' },
        job: { jobTitle: '', supervisorName: '', supervisorTitle: '' },
        responsibilities: '',
        reasonForLeaving: '',
        contact: '',
      }
    ]
  );
  const [errors, setErrors] = useState({});

const updateExperiences = (newExperiences) => {
  setExperiences(newExperiences);
  setUserData(prevData => ({ ...prevData, experiences: newExperiences }));
};

const updateExperiencesContd = (newExperiences) => {
  setExperiencesContd(newExperiences);
  setUserData(prevData => ({ ...prevData, experiencesContd: newExperiences }));
};

const validateForm = () => {
  const newErrors = {};
  let isValid = true;

  const validateExperiences = (exps, prefix) => {
    exps.forEach((exp, index) => {
      // Validate 'from' data
      if (!exp.from.date || !exp.from.firmName || !exp.from.phone || !exp.from.startingSalary) {
        newErrors[`${prefix}from${index}`] = 'Please fill all fields in the "From" section';
        isValid = false;
      }

      // Validate 'to' data
      if (!exp.to.date || !exp.to.street || !exp.to.city || !exp.to.zip || !exp.to.state || !exp.to.jobTitle || !exp.to.supervisorName) {
        newErrors[`${prefix}to${index}`] = 'Please fill all fields in the "To" section';
        isValid = false;
      }

      // Validate 'job' data
      if (!exp.job.jobTitle || !exp.job.supervisorName || !exp.job.supervisorTitle) {
        newErrors[`${prefix}job${index}`] = 'Please fill all fields in the job details section';
        isValid = false;
      }

      // Validate other fields
      if (!exp.responsibilities) {
        newErrors[`${prefix}responsibilities${index}`] = 'Please fill the Responsibilities';
        isValid = false;
      }
      if (!exp.reasonForLeaving) {
        newErrors[`${prefix}reasonForLeaving${index}`] = 'Please fill the Reason for Leaving';
        isValid = false;
      }
      if (!exp.contact) {
        newErrors[`${prefix}contact${index}`] = 'Please select an option for contacting the employer';
        isValid = false;
      }
    });
  };

  validateExperiences(experiences, '');
  validateExperiences(experiencesContd, 'contd');

  setErrors(newErrors);
  return isValid;
};

  // Determine which component to render based on the current step
  const renderComponent = () => {
    console.log("Current step:", currentStep);
    if (currentStep === 3) {
      console.log("Rendering PreviousExperience");
      return (
        <PreviousExperience
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
          experiences={experiences}
          updateExperiences={updateExperiences}
          errors={errors}
          validateForm={validateForm}
        />
      );
    } else if (currentStep === 4) {
      console.log("Rendering PreviousExperienceContd");
      return (
        <PreviousExperienceContd
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
          experiences={experiences}
          updateExperiences={updateExperiencesContd}
          errors={errors}
          validateForm={validateForm}
        />
      );
    } else {
      console.log("No matching component found");
      return null;
    }
  };
  return (
    <>
      {renderComponent()}
    </>
  );
};

export default ExperienceWrapper;