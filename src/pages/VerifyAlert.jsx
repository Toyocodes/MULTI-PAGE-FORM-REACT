import React from 'react'
import Tick from '../assets/images/tick.png'
import AuthenSidebar from '../components/AuthenSidebar'
import { useNavigate } from 'react-router-dom'

const VerifyAlert = () => {

  const navigate = useNavigate();

  const handleProfileSetUp = (e) => {
      e.preventDefault();
     
      navigate('/form');
   
  };

  return (
    <div className="flex">

        <div className='basis-[25%]'>
            <AuthenSidebar/>
        </div>

        <div className="basis-[75%] flex justify-center items-center">
            <form>

              <div className='text-center bg-white text-xs text-[#fff] py-12 px-20 p-4 rounded-2xl custom-shadow border border-[#5B3A89]'>
                  <img src={Tick} alt="" className='mx-auto w-20 h-20 mb-4' />
                  <h3 className='text-[#5B3A89] text-xl font-bold mb-4'>Your account has been verified</h3>
                  <p className="text-sm leading-6 w-560 text-black mb-4">You can now proceed to set up your profile.</p>
                  <button className="bg-gradient-to-r from-[#5B3A89] to-[#E43351] text-white text-sm px-12 py-4 border border-gray-300 mt-4 rounded-lg"
                  onClick={handleProfileSetUp}>
                      Set up profile
                  </button>  
              </div>

            </form>
        </div>

          

    </div>
  )
}

export default VerifyAlert