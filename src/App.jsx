// import React, { useState } from 'react';
// import './App.css';
// import { StepperContext } from './components/contexts/StepperContext';
// import Stepper from './components/Stepper';
// import GeneralInformation from './components/steps/GeneralInformation/GeneralInformation';
// import Education from './components/steps/Education/Education';
// import AdditionalQualification from './components/steps/AdditionalQualification/AdditionalQualification';
// import References from './components/steps/References/References';
// import BackGroundData from './components/steps/BackGroundData/BackGroundData';
// import ApplicantsCertification from './components/steps/ApplicantsCertification/ApplicantsCertification';
// import PreviousExperienceContd from './components/steps/PreviousExperienceContd/PreviousExperienceContd';
// import Finall from './components/steps/Finall/Finall';
// import PreviousExperience from './components/steps/PreviousExperience/PreviousExperience';


// function App() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [userData, setUserData] = useState('');
//   const [finalData, setFinalData] = useState([]);
//   const steps = [
//     "General Information", "Education", "Previous Experience", "Previous Experience contd","Additional Qualification",
//     "References", "Background Data", "Applicants Certification", "Final"
//   ];

//   const displayStep = (step) => {
//     switch (step) {
//       case 1:
//         return <GeneralInformation handleClick={handleClick} currentStep={currentStep} steps={steps} />;
//       case 2:
//         return <Education handleClick={handleClick} currentStep={currentStep} steps={steps} />;
//       case 3:
//         return <PreviousExperience handleClick={handleClick} currentStep={currentStep} steps={steps} />;
//       case 4:
//         return <PreviousExperienceContd handleClick={handleClick} currentStep={currentStep} steps={steps} />;
//       case 5:
//         return <AdditionalQualification handleClick={handleClick} currentStep={currentStep} steps={steps} />;
//       case 6:
//         return <References handleClick={handleClick} currentStep={currentStep} steps={steps} />;
//       case 7:
//         return <BackGroundData handleClick={handleClick} currentStep={currentStep} steps={steps} />;
//       case 8:
//         return <ApplicantsCertification handleClick={handleClick} currentStep={currentStep} steps={steps} />;
//       case 9:
//         return <Finall handleClick={handleClick} currentStep={currentStep} steps={steps}/>;
//       default:
//     }
//   };

//   const handleClick = async(direction) => {
//     let newStep = currentStep;
//     if (direction === "next") {
//       newStep++;
//     } else if (direction === "back") {
//       newStep--;
//     }
//     // check if steps are within bounds
//     if (newStep > 0 && newStep <= steps.length) {
//       setCurrentStep(newStep);
//     }
//   };

//   return (
//     <div className="w-11/12 mx-auto shadow-xl rounded-2xl pb-2 bg-white px-10">
//       {/* stepper */}
//       <div className='container horizontal mt-5 px-[115px]'>
//         <Stepper steps={steps} currentStep={currentStep}/>
//         {/* Display Components */}
//         <div className='mt-20 pr-10 mr-10'>
//           <StepperContext.Provider value={{ userData, setUserData, finalData, setFinalData }}>
//             {displayStep(currentStep)}
//           </StepperContext.Provider>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import { StepperContext } from './components/contexts/StepperContext';
import Stepper from './components/Stepper';
import GeneralInformation from './components/steps/GeneralInformation/GeneralInformation';
import Education from './components/steps/Education/Education';
import AdditionalQualification from './components/steps/AdditionalQualification/AdditionalQualification';
import References from './components/steps/References/References';
import BackGroundData from './components/steps/BackGroundData/BackGroundData';
import ApplicantsCertification from './components/steps/ApplicantsCertification/ApplicantsCertification';
import PreviousExperienceContd from './components/steps/PreviousExperienceContd/PreviousExperienceContd';
import Finall from './components/steps/Finall/Finall';
import PreviousExperience from './components/steps/PreviousExperience/PreviousExperience';


function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "General Information", "Education", "Previous Experience", "Previous Experience contd","Additional Qualification",
    "References", "Background Data", "Applicants Certification", "Final"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <GeneralInformation handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 2:
        return <Education handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 3:
        return <PreviousExperience handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 4:
        return <PreviousExperienceContd handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 5:
        return <AdditionalQualification handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 6:
        return <References handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 7:
        return <BackGroundData handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 8:
        return <ApplicantsCertification handleClick={handleClick} currentStep={currentStep} steps={steps} />;
      case 9:
        return <Finall handleClick={handleClick} currentStep={currentStep} steps={steps}/>;
      default:
    }
  };

  const handleClick = async(direction) => {
    let newStep = currentStep;
    if (direction === "next") {
      newStep++;
    } else if (direction === "back") {
      newStep--;
    }
    // check if steps are within bounds
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <div className="w-11/12 mx-auto shadow-xl rounded-2xl pb-2 bg-white px-10">
      {/* stepper */}
      <div className='container horizontal mt-5 xl:px-[200px] md:px-0'>
        <Stepper steps={steps} currentStep={currentStep}/>
        {/* Display Components */}
        <div className='mt-20 pr-10 mr-10 md:pr-0 md:mr-0'>
          <StepperContext.Provider value={{ userData, setUserData, finalData, setFinalData }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;




