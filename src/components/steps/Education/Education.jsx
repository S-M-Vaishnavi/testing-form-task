
import React, { useContext, useState ,useEffect} from 'react';
import StepperControl from '../../StepperControl';
import { StepperContext } from "../../contexts/StepperContext";

const Education = ({ handleClick, currentStep, steps }) => {
  const { userData, setUserData } = useContext(StepperContext);
  const [errors, setErrors] = useState({});
  const [educationData, setEducationData] = useState([
    { college: '', city: '', dates: '', degree: '', major: '', minor: '', overallGPA: '', majorGPA: '', hoursWorked: '' },
    { college: '', city: '', dates: '', degree: '', major: '', minor: '', overallGPA: '', majorGPA: '', hoursWorked: '' },
    { college: '', city: '', dates: '', degree: '', major: '', minor: '', overallGPA: '', majorGPA: '', hoursWorked: '' }
  ]);
  const [courseData, setCourseData] = useState([
    { course: '', school: '', credits: '', grade: '' },
    { course: '', school: '', credits: '', grade: '' },
    { course: '', school: '', credits: '', grade: '' },
    { course: '', school: '', credits: '', grade: '' },
    { course: '', school: '', credits: '', grade: '' }
  ]);
  const [testScores, setTestScores] = useState({
    satVerbal: '', greVerbal: '', act: '',
    satMath: '', greMath: '', lsat: '',
    satTotal: '', greTotal: '', gmat: ''
  });
  const [licenseInfo, setLicenseInfo] = useState({
    partsTaken: '', state: '', licenseNumber: ''
  });
  const [activeStatus, setActiveStatus] = useState('');

    useEffect(() => {
    if (userData.education) {
      setEducationData(userData.education.degrees || educationData);
      setCourseData(userData.education.courses || courseData);
      setTestScores(userData.education.testScores || testScores);
      setLicenseInfo(userData.education.licenseInfo || licenseInfo);
      setActiveStatus(userData.education.activeStatus || activeStatus);
    }
  }, [userData]);

  const handleEducationChange = (index, field, value) => {
    const newData = [...educationData];
    newData[index][field] = value;
    setEducationData(newData);
  };

  const handleCourseChange = (index, field, value) => {
    const newData = [...courseData];
    newData[index][field] = value;
    setCourseData(newData);
  };

  const handleTestScoreChange = (field, value) => {
    setTestScores(prev => ({ ...prev, [field]: value }));
  };

  const handleLicenseChange = (field, value) => {
    setLicenseInfo(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate education data
    educationData.forEach((edu, index) => {
      if (edu.college && Object.values(edu).some(val => val === '')) {
        newErrors[`education${index}`] = 'Please fill all fields for this degree';
        isValid = false;
      }
    });

    if (educationData.every(edu => Object.values(edu).every(val => val === ''))) {
      newErrors.education = 'Please fill at least one degree information';
      isValid = false;
    }

    // Validate course data
    courseData.forEach((course, index) => {
      if (Object.values(course).some(val => val !== '') && Object.values(course).some(val => val === '')) {
        newErrors[`course${index}`] = 'Please fill all fields for this course';
        isValid = false;
      }
    });

    if (courseData.every(course => Object.values(course).every(val => val === ''))) {
      newErrors.courseData = 'Please fill the course';
      isValid = false;
    }

    // Validate test scores
    const testScoreGroups = [
      ['satVerbal', 'greVerbal', 'act'],
      ['satMath', 'greMath', 'lsat'],
      ['satTotal', 'greTotal', 'gmat']
    ];

    testScoreGroups.forEach((group, index) => {
      if (group.some(field => testScores[field] !== '') && group.some(field => testScores[field] === '')) {
        newErrors[`testScores${index}`] = 'Please fill all fields in this row';
        isValid = false;
      }
    });

    // Validate license info
    if (Object.values(licenseInfo).some(val => val !== '') && Object.values(licenseInfo).some(val => val === '')) {
      newErrors.license = 'Please fill all fields for license information';
      isValid = false;
    }

    // Validate active status
    if (activeStatus === '') {
      newErrors.activeStatus = 'Please select an active status';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setUserData(prevData => ({
        ...prevData,
        education: {
          degrees: educationData,
          courses: courseData,
          testScores,
          licenseInfo,
          activeStatus
        }
      }));
      handleClick("next", true);
    }
  };

  return (
    <div className="flex flex-col">
      {errors.education && <div className="text-red-500 mb-2">{errors.education}</div>}
      <table className="table-auto border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">College/Universities</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">City/State</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Dates Attended</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Degree and Graduation date</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Major</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Minor</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Overall GPA</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">GPA in major</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Number of hours worked</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((edu, index) => (
            <tr key={index}>
              {Object.keys(edu).map(field => (
                <td key={field} className="border border-gray-300">
                  <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" value={edu[field]} onChange={(e) => handleEducationChange(index, field, e.target.value)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {educationData.map((_, index) => (
        errors[`education${index}`] && <div key={index} className="text-red-500 mt-1">{errors[`education${index}`]}</div>
      ))}
      
      <table className="table-auto border border-slate-500 mt-9">
        <thead>
          <tr>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Course</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">School</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Credits Hours</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Grade</th>
          </tr>
        </thead>
        <tbody>
          {courseData.map((course, index) => (
            <tr key={index}>
              {Object.keys(course).map(field => (
                <td key={field} className="border border-gray-300">
                  <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" value={course[field]} onChange={(e) => handleCourseChange(index, field, e.target.value)}/>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {courseData.map((_, index) => (
        errors[`course${index}`] && <div key={index} className="text-red-500 mt-1">{errors[`course${index}`]}</div>
      ))}
      {errors.courseData && <div className="text-red-500 mb-2">{errors.courseData}</div>}


      <table className="table-auto border border-slate-500 mt-9">
        <thead>
          <tr>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">SAT Verbal</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">GRE Verbal</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">ACT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {['satVerbal', 'greVerbal', 'act'].map(field => (
              <td key={field} className="border border-gray-300">
                <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" value={testScores[field]} onChange={(e) => handleTestScoreChange(field, e.target.value)}/>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {errors.testScores0 && <div className="text-red-500 mt-1">{errors.testScores0}</div>}

      <table className="table-auto border border-slate-500 mt-9">
        <thead>
          <tr>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">SAT Math</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">GRE Math</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">LSAT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {['satMath', 'greMath', 'lsat'].map(field => (
              <td key={field} className="border border-gray-300">
                <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" value={testScores[field]} onChange={(e) => handleTestScoreChange(field, e.target.value)}/>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {errors.testScores1 && <div className="text-red-500 mt-1">{errors.testScores1}</div>}

      <table className="table-auto border border-slate-500 mt-9">
        <thead>
          <tr>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">SAT Total</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">GRE Total</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">GMAT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {['satTotal', 'greTotal', 'gmat'].map(field => (
              <td key={field} className="border border-gray-300">
                <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" value={testScores[field]} onChange={(e) => handleTestScoreChange(field, e.target.value)}/>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {errors.testScores2 && <div className="text-red-500 mt-1">{errors.testScores2}</div>}

      <table className="table-auto border border-slate-500 mt-9">
        <thead>
          <tr>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">Parts taken, passed</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">State</th>
            <th className="border border-slate-600 font-bold h-6 mt-3 text-gray-500 text-xs leading-5 uppercase">License Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(licenseInfo).map(field => (
              <td key={field} className="border border-gray-300">
                <input type="text" className="w-full border border-gray-300 px-2 py-1 focus:outline-none" value={licenseInfo[field]} onChange={(e) => handleLicenseChange(field, e.target.value)}/>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {errors.license && <div className="text-red-500 mt-1">{errors.license}</div>}

      <div className="flex gap-5 items-center mt-9">
        <div className="font-bold h-6 text-gray-500 text-xs leading-5 uppercase">Active Status</div>
        <div className="flex gap-3 justify-center items-baseline">
          <div className="font-bold h-6 text-gray-500 text-xs leading-5 uppercase">yes</div>
          <div><input type="radio" value="yes" checked={activeStatus === 'yes'} onChange={() => setActiveStatus('yes')} className="mb-4" /></div>
        </div>
        <div className="flex gap-3 justify-center items-baseline">
          <div className="font-bold h-6 text-gray-500 text-xs leading-5 uppercase">No</div>
          <div><input type="radio" value="" checked={activeStatus === 'no'} onChange={() => setActiveStatus('no')} className="mb-4" /></div>
        </div>
      </div>

      <StepperControl handleClick={handleClick} handleSubmit={handleSubmit} currentStep={currentStep} steps={steps} />
    </div>
  )
}

export default Education;

