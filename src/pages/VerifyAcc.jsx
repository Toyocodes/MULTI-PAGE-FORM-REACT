import React from 'react'
import Avatar from '../assets/images/Avatar.png'
// import { useNavigate } from 'react-router-dom'

const VerifyAcc = ({formData, setFormData}) => {

  // const navigate = useNavigate();

  // const handleVerifyAccount = (e) => {
  //     e.preventDefault();
  //     if (otp.value !== "") {
  //     navigate('/verifyAlert');
  //     }
  // };

  return (
    <div className="flex mt-[150px]">

        <div>
              <form className='w-[400px]'>

                <div className='flex bg-[#5B3A89] text-xs text-[#fff] p-4 rounded-2xl absolute top-20 right-11 custom-shadow'>
                    <img src={Avatar} alt="" className='mr-2 w-14 h-14' />
                    <p className="text-sm leading-6 w-280">Welcome to SkillPaddy Job Match. 
                    I am glad you are here. 
                    Kindly provide your details to get started.</p>
                </div>

                <div className="form-header mt-20">
                    <h2 className='text-xl text-[#5B3A89] font-extrabold mb-3'>Verify your account</h2>
                    <p className='text-sm font-bold text-[#808080] mb-6'>Enter verification code sent to your email</p>
                </div>

                <div className="form-row">
                    <label htmlFor="otp" className="block mb-2 mt-6 text-sm">OTP</label>
                    <input value={formData.otp} onChange={(event)=> setFormData({...formData, otp: event.target.value})}
                    type="otp" className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" 
                    id="otp" placeholder="Enter OTP" required/>
                </div>

                {/* <button className="w-full bg-gradient-to-r from-[#5B3A89] to-[#E43351] text-white p-2 border border-gray-300 mt-4 rounded-md"
                onClick={handleVerifyAccount}>
                  Continue
                </button>   */}
                      
              </form>
        </div>

    </div>
  )
}

export default VerifyAcc