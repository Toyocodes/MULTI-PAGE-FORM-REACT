import React, { useState } from "react";
import Sidebar from '../components/Sidebar'
import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo'
import StepThree from '../components/StepThree'
import StepFour from '../components/StepFour'
import StepFive from '../components/StepFive'
import StepSix from '../components/StepSix'
// import VerifyAlert from './components/Authentication/VerifyAlert'
import { FaHeart } from "react-icons/fa"; 

const Form = () => {
    const [page, setPage] = useState(0);
    //to store data in the state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        location: '',
        professionalSummary: '',
        professionalLevel: '',
        yearsOfProf:'',
        professionalSkill: '',
        company: '',
        jobTitle: '',
        startDate: '',
        endDate: '',
        iCurrentyWorkHere:'',
        fullTime:'',
        partTime: '',
        contract: '',
        jobDescription:'',
        school: '',
        degreeLevel: '',
        course: '',
        year:'',
        certificateTitle:'',
        issuingOrganisation: '',
        credentialURL: '', 
        issuedDate:'',
        linkedin: '',
        portfolio: '',
        github: '',
        others:''
    });
    
    const FormTitles = ["Personal details", "Work Experience", "Educational Background", 
    "Certifications & Licenses", "Social Profile/Portfolio", "Job preferences"];

    const PageDisplay = () => {
        if (page === 0) {
          return <StepOne formData={formData} setFormData={setFormData}/>;
        } else if (page === 1) {
          return <StepTwo formData={formData} setFormData={setFormData}/>;
        } else if (page === 2) {
          return <StepThree formData={formData} setFormData={setFormData}/>;
        } else if (page === 3) {
          return <StepFour formData={formData} setFormData={setFormData}/>;
        } else if (page === 4) {
          return <StepFive formData={formData} setFormData={setFormData}/>;
        } else {
          return <StepSix formData={formData} setFormData={setFormData}/>;
        }
      };
     
      
      const handleButtonClick = () => {
        if (page === FormTitles.length - 1) {
            alert("FORM SUBMITTED");
            console.log(formData) //to see all the input value.You should send this to an API if you want to have all the information viewable on your webpage. you can also style it
            // Handle the "Save and Review" action for StepSix
            console.log("Save and Review clicked!");
        } else {
            // Move to the next step for other steps
            setPage((currPage) => currPage + 1);
           
        }
    };
    
   
 

  return (
    <div  className="form">
         <div className="form-container">
            {/* <div className="header">
                <h1>{FormTitles[page]}</h1>
            </div> */}
            <div className="body flex">

                <div className='basis-[35%] '>
                    {/* <Sidebar FormTitles={FormTitles} page={page}/> */}
                    <Sidebar activePage={page} />
                </div>
                <div className='basis-[65%]'>
                    {/* Render the page content */}
                    
                    {PageDisplay()}

                    <div className="footer flex flex-col justify-center items-center">
                    
                        {page > 0 && (
                            <button
                                //if it is not on the first page is when you should 
                                //show the prev button
                                onClick={() => setPage((currPage) => currPage - 1)}
                                className="w-[400px] bg-gradient-to-r from-[#5B3A89] to-[#E43351] text-white p-2 border
                                border-gray-300 mt-6 rounded-md"
                            >
                                Prev
                            </button>
                        )}
                        <button
                            //handleButtonClick function was invoke here
                            //the button text changes when we are on the last page
                            //once we click on it, it shows a popup saying form submitted
                            onClick={handleButtonClick}
                            className="w-[400px] bg-gradient-to-r from-[#5B3A89] to-[#E43351] text-white p-2 border 
                            border-gray-300 mt-6 rounded-md"
                        >   
                            {page === FormTitles.length - 1 ? "Save and Review" : "Continue"}
                        </button>

                        <div className="progressbar flex gap-3 mt-16 mb-20">
                          <div className="one active" style={{ backgroundColor: page === 0 ? '#43215D' : '#e6e1e1'}}></div>
                          <div className="two" style={{ backgroundColor: page === 1 ? '#43215D' : '#e6e1e1'}}></div>
                          <div className="two" style={{ backgroundColor: page === 2 ? '#43215D' : '#e6e1e1'}}></div>
                          <div className="four" style={{ backgroundColor: page === 3 ? '#43215D' : '#e6e1e1'}}></div>
                          <div className="five" style={{ backgroundColor: page === 4 ? '#43215D' : '#e6e1e1'}}></div>
                          <div className="six" style={{ backgroundColor: page === 5 ? '#43215D' : '#e6e1e1'}}></div>
                        </div>
                              
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Form