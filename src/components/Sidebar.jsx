import React from 'react'
import logo from '../assets/images/logo.png'
// import circle from '../assets/images/circle-hadow.png'
import mail from '../assets/images/mail.png'
import { GiCheckMark } from "react-icons/gi"; 

const data = [
          {
            id: 1,
            title: "Personal Details",
            description: "let's meet you",
          },
          {
            id: 2,
            title: "Work Experience",
            description: "Share your professional experience",
          },
          {
            id: 3,
            title: "Educational Background",
            description: "Share your academic achievements",
          },
          {
            id: 4,
            title: "Certifications & Licenses",
            description: "Share your other achievements",
          },
          {
            id: 5,
            title: "Social Profile/Portfolio",
            description: "Let’s see examples of your work",
          },
          {
            id: 6,
            title: "Job Preferences",
            description: "How would you like to work?",
          },
          
        ];
    
const Sidebar = ({page}) => {

  return (
 <div> 

    {/* steps */}
    <div id="sidebar" className="flex flex-col bg-[#43215D] pt-6 pr-4 pb-0 pl-10 h-[100vh] fixed">

      <div className="sidebar-menu">
            <img src={logo} className="mb-6 mt-2" alt=""/>
            <h2 className="text-[#fff] font-semibold text-2xl mb-6">Set up your profile</h2>
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
                        <div className='flex items-center justify-center h-full'>
                          <div class="w-0.5 h-6 bg-gray-200 dark:bg-gray-700"></div>
                        </div>
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

              {/* <img src={circle} alt="" className='h-[50px] w-6'/> */}
            <div className="flex justify-between text-[#BFBFBF] text-xs font-light ">
                <p>Skillpaddy Job Match</p>
                <p className="flex "><img src={mail} alt="" className="pr-2"/> help@skillpaddy.com</p>
            </div>

          </div>

       
    </div>


   
   </div>   
  )
}
  
  
  export default Sidebar;
 