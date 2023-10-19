import React, { useState } from "react";
import Sidebar from '../components/TalentSidebar'
import FormOne from '../components/CreateAccount'
import FormTwo from './VerifyAcc'
import { useNavigate } from "react-router";


const TalentForm = () => {
    const [page, setPage] = useState(0);
    //to store data in the state
    const [formData, setFormData] = useState({
        emailAddress: '',
        password: '',
        otp:'',
    });
    
    const FormHeading = ["Authentication", "Verification"];

    const FormDisplay = () => {
        if (page === 0) {
          return <FormOne formData={formData} setFormData={setFormData}/>;
        } else if (page === 1) {
          return <FormTwo formData={formData} setFormData={setFormData}/>;
        } 
      };
     
      const navigate = useNavigate();
      
      const handleButtonClick = () => {
        if (page === FormHeading.length - 1) {
            navigate('/verifyAlert');
        } else {
            setPage((currPage) => currPage + 1);
        }
    };
    

  return (
    <div  className="form">
         <div className="form-container">
            <div className="body flex">

                <div className='basis-[25%] '>
                    <Sidebar FormHeading={FormHeading} page={page}/>
                </div>
                <div className='basis-[75%] flex justify-center items-center'> 
                    <div>
                    {FormDisplay()}

                        <div className="footer flex flex-col justify-center items-center">

                            {page > 0 && (
                                <button
                                    onClick={() => setPage((currPage) => currPage - 1)}
                                    className="w-[400px] bg-gradient-to-r from-[#5B3A89] to-[#E43351] text-white p-2 border
                                    border-gray-300 mt-6 rounded-md"
                                >
                                    Prev
                                </button>
                            )}
                            <button
                                onClick={handleButtonClick}
                                className="w-full bg-gradient-to-r from-[#5B3A89] to-[#E43351] text-white p-2 border border-gray-300 mt-4 rounded-md"
                            >   
                            Continue
                                {/* {page === FormHeading.length - 1 ? "Save and Review" : "Continue"} */}
                            </button>


                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default TalentForm