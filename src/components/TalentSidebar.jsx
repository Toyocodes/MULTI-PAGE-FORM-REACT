import React from 'react'
import logo from '../assets/images/logo.png'
// import circle from '../assets/images/circle-hadow.png'
import mail from '../assets/images/mail.png'
import { GiCheckMark } from "react-icons/gi"; 

const data = [
    {
      id: 1,
      title: "Authentication",
      description: "Enter your details",
    },
    {
      id: 2,
      title: "Verification",
      description: "Enter OTP sent to your mail",
    },
  ];
const AuthenSidebar = ({page}) => {
  return (
    <div>
      
      <div id="sidebar" className="flex flex-col bg-[#43215D] pt-9 pr-4 pb-0 pl-12 h-[100vh] fixed">
          <div className="sidebar-menu">
            <img src={logo} className="mb-12 mt-2" alt=""/>
            <h2 className="text-[#fff] font-semibold text-2xl mb-12">Talent Signup </h2>
          <ol>
              {
                data.map((step, index) => {
                  return (
                    
                    <li className='relative flex mb-[1.4rem]' key={index}>
                      <div>
                        <div>
                          {page >= index ? (
                            <GiCheckMark size={33} className="bg-green-500 rounded-full px-2 text-white" />
                          ) : (
                            <div className='filter-btn step flex items-center justify-center text-white hover:bg-white hover:text-black rounded-full w-8 h-8 border-2 bg-transparent'>
                                <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full">
                                <span className="flex w-3 h-3 bg-white rounded-full"></span>
                              </div>
                            </div>
                          )}
                        </div>

                          {/* the lines */}
                        {/* <div className='flex items-center justify-center h-full'>
                          <div class="w-0.5 h-6 bg-gray-200 dark:bg-gray-700"></div>
                        </div> */}
                      </div>

                      <div className="steps ml-4 hover:mt-1">
                        <h3 className="text-white mb-1 text-base font-bold">{step.title}</h3>
                        <p className="text-[#BFBFBF] text-sm">{step.description}</p>
                      </div>
                    </li>
                  );
                })
              }

            </ol>

          </div>

          {/* <img src={circle} alt=""/> */}
          <div className="flex justify-between items-center mt-[250px] px-4 gap-x-4 text-[#BFBFBF] text-xs font-light ">
                <p className="">Skillpaddy Job Match</p>
                <div className='flex'>
                  <img src={mail} alt="" className="pr-2"/>
                  <p className="flex">help@skillpaddy.com</p>
                </div>
            </div>
      </div>

    </div>
  )
}

export default AuthenSidebar