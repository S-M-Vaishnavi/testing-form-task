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
  const [errors, setErrors] = useState({});

  const updateExperiences = (newExperiences) => {
    setExperiences(newExperiences);
    setUserData(prevData => ({ ...prevData, experiences: newExperiences }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    experiences.forEach((exp, index) => {
      // Validation logic (unchanged)
      // ...
    });

    setErrors(newErrors);
    return isValid;
  };

  // Determine which component to render based on the current step
  const renderComponent = () => {
    switch (currentStep) {
      case "PreviousExperience":
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
      case "Previous Experience Continued":
        return (
          <PreviousExperienceContd
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
            experiences={experiences}
            updateExperiences={updateExperiences}
            errors={errors}
            validateForm={validateForm}
          />
        );
      default:
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