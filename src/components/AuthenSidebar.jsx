import React from 'react'
import logo from '../assets/images/logo.png'
import circle from '../assets/images/circle-hadow.png'
import mail from '../assets/images/mail.png'

const AuthenSidebar = () => {
  return (
    <div>
      
      <div id="sidebar" className="flex flex-col bg-[#43215D] pt-9 pr-4 pb-0 pl-12">
          <div className="sidebar-menu">
          <img src={logo} className="mb-12 mt-2" alt=""/>
          <h2 className="text-[#fff] font-semibold text-2xl mb-12">Talent Signup </h2>
          <ul>
              <li>
                  <a href="" className="flex">
                      <button type="button" className="filter-btn active form1-progress hover:bg-white hover:text-black rounded-full w-8 h-8 border-2 bg-transparent" data-id="1">1</button>
                      <div className="steps ml-4 hover:mt-1">
                          <h3 className="text-white mb-1 text-base font-bold">Authentication</h3>
                          <p className="text-[#BFBFBF] text-sm">Enter your details</p>
                      </div>
                  </a>
              </li>
              <li>
                  <a href="" className="flex mt-9">
                      <button type="button" className="filter-btn form2-progress text-white hover:bg-white hover:text-black rounded-full w-8 h-8 border-2 bg-transparent" data-id="2">2</button>
                      <div className="steps ml-4 hover:mt-1">
                          <h3 className="text-white mb-1 text-base font-bold">Verification</h3>
                          <p className="text-[#BFBFBF] text-sm">Enter OTP sent to your mail</p>
                      </div>
                  </a>
              </li>
              
          </ul>

          </div>

          <img src={circle} alt=""/>
          <div className="flex justify-between mb-9 text-[#BFBFBF] text-xs font-light ">
              <p className="pr-28">Skillpaddy Job Match</p>
              <p className="flex mr-2"><img src={mail} alt="" className="pr-2"/> help@skillpaddy.com</p>
          </div>
      </div>

    </div>
  )
}

export default AuthenSidebar