import React from 'react'
import Avatar from '../assets/images/Avatar.png'
// import AuthenSidebar from './AuthenSidebar'
// import { useNavigate } from 'react-router-dom'

const CreateAccount = ({formData, setFormData}) => {

    // const navigate = useNavigate();

    // const handleCreateAccount = (e) => {
    //     e.preventDefault();
    //     if (email.value !== "" && password.value !== "") {
    //     navigate('/verifyAcc');
    //     }
    // };


  return (
    
    <div className='flex mt-[150px]'>
       
        <div>
            <form action="" id="stepA" className="step-section active">

                <div className='flex bg-[#5B3A89] text-xs text-[#fff] p-4 rounded-2xl absolute top-20 right-11 custom-shadow'>
                    <img src={Avatar} alt="" className='mr-2 w-14 h-14' />
                    <p className="text-sm leading-6 w-280">Welcome to SkillPaddy Job Match. 
                    I am glad you are here. 
                    Kindly provide your details to get started.</p>
                </div>

                <div className='w-[500px]'>
                    <div className="form-header mt-20">
                        <h2 className='text-xl text-[#5B3A89] font-extrabold mb-3'>Create an account</h2>
                        <p className='text-sm font-bold text-[#808080] mb-6'>Enter your details</p>
                    </div>
                    
                    <div className="form-row">
                        <label htmlFor="email" className="block mb-2 mt-4 text-sm">Email Address</label>
                        <input value={formData.email} onChange={(event)=> setFormData({...formData, email: event.target.value})}
                         type="email" className="text-sm w-full p-3 border border-gray-300 rounded-md items-center" 
                        id="email" placeholder="Enter your email address" required/>
                    </div>

                    <div className="form-row">
                        <label htmlFor="psw" className="block mb-2 mt-4 text-sm">Password</label>
                        <input value={formData.password} onChange={(event)=> setFormData({...formData, password: event.target.value})}
                        type="password" className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" 
                        id="password" placeholder="Create a password" required/>
                    </div>
                </div>

                {/* <button className="w-full bg-gradient-to-r from-[#5B3A89] to-[#E43351] text-white p-2 border border-gray-300 mt-4 rounded-md"
                    >
                    Continue
                </button>   */}
                        
            </form>
        </div>
    </div>
    
  )
}

export default CreateAccount