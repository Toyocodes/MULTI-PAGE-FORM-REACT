import React from 'react'
import Tick from '../assets/images/tick.png'
// import AuthenSidebar from '../components/AuthenSidebar'
import { useNavigate } from 'react-router-dom'


const Confirm = () => {

  const navigate = useNavigate();

  const backToHome = (e) => {
      e.preventDefault();
     
      navigate('/');
   
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
{/* 
        <div className='basis-[25%]'>
            <AuthenSidebar/>
        </div> */}

        <div className="flex justify-center items-center">
            <form>

              <div className='text-center bg-white text-xs text-[#fff] py-12 px-20 p-4 rounded-2xl custom-shadow border border-[#5B3A89]'>
                  <img src={Tick} alt="" className='mx-auto w-20 h-20 mb-4' />
                  <h3 className='text-[#5B3A89] text-xl font-bold mb-4'>Your account has been set up Successfully</h3>
                  <p className="text-sm leading-6 w-560 text-black mb-4">You can now proceed to the home page</p>
                  <button className="bg-gradient-to-r from-[#5B3A89] to-[#E43351] text-white text-sm px-12 py-4 border border-gray-300 mt-4 rounded-lg"
                  onClick={backToHome}>
                      Ok
                  </button>  
              </div>

            </form>
        </div>

          

    </div>
  )
}

export default Confirm