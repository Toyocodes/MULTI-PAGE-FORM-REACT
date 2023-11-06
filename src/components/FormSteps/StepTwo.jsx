import React from 'react'
import calendar from '../../assets/images/calendar.png'

const Step2 = ({formData, setFormData}) => {
  return (
    <div className='flex items-center justify-center mt-14'>


          <form className='w-[400px]'>

              <div className="form-row">
                  <label htmlFor="email" className="block mb-2 mt-4 text-sm">Company</label>
                  <input type="text" value={formData.company} 
                  onChange={(event)=> setFormData({...formData, company: event.target.value})} 
                  className="form-control text-sm w-[400px] p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="Enter company name"/>
              </div>

              <div className="form-row">
                  <label htmlFor="email" className="block mb-2 mt-4 text-sm">Job Title</label> 
                  <textarea value={formData.jobTitle} 
                  onChange={(event)=> setFormData({...formData, jobTitle: event.target.value})} 
                  className="form-control w-full px-4 pt-4 pb-32 border border-gray-300 rounded-md resize-none" placeholder="Enter job title"></textarea>
              </div>  

              <div className="form-row flex space-x-4 mt-2">
                  <div>
                      <label htmlFor="startdate" className="block mb-2 mt-4 text-sm">Start date</label> 
                      <select type="date" name="select" id="select" 
                      value={formData.startDate} 
                      onChange={(event)=> setFormData({...formData, startDate: event.target.value})} 
                      className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" placeholder="Select"> <img src={calendar} alt="" /> 
                          <option value="option1">Select</option>
                          <option value="option2">1</option>
                          <option value="option3">2</option>
                          <option value="option2">3</option>
                          <option value="option3">4</option>
                      </select>
                  </div>
                  <div>
                      <label htmlFor="startdate" className="block mb-2 mt-4 text-sm">End date</label> 
                      <select type="date" name="select" id="select" 
                      value={formData.endDate} 
                      onChange={(event)=> setFormData({...formData, endDate: event.target.value})} 
                      className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" placeholder="Select"> <img src={calendar} alt="" /> 
                          <option value="option1">Select</option>
                          <option value="option2">1</option>
                          <option value="option3">2</option>
                          <option value="option2">3</option>
                          <option value="option3">4</option>
                      </select>
                  </div> 
              </div>

              <div className="form-row flex space-x-4 mt-6">
                  <input type="checkbox" 
                  value={formData.iCurrentlyWorkHere} 
                  onChange={(event)=> setFormData({...formData, iCurrentlyWorkHere: event.target.value})} 
                  className='w-6 h-6'/> <p className="text-sm">I currenty work here</p>
              </div> 

              <div className='flex space-x-4 mt-6'>
                  <label htmlFor="">Full-time</label><input type="radio" 
                  className='w-6 h-6'/> 
                  <label htmlFor="">Part-time</label><input type="radio" 
                  className='w-6 h-6'/> 
                  <label htmlFor="">Contract</label><input type="radio" 
                    className='w-6 h-6'/> 
              </div>

              <div className="form-row mt-6">
                  <label for="email" className="block mb-2 text-sm">Job description</label> 
                  <textarea value={formData.jobDescription} onChange={(event)=> setFormData({...formData, jobDescription: event.target.value})} 
                  className="form-control w-full px-4 pt-4 pb-32 border border-gray-300 rounded-md resize-none" placeholder="Enter your Job description"></textarea>
              </div> 

              <div className='mt-4'> 
                  <button className="w-full bg-transparent text-[#E43351] text-xs p-2 border border-[#E43351] rounded-md">
                  Save and add new</button>  
              </div> 

              {/* <button className="w-full bg-gradient-to-r from-[#5B3A89] to-[#E43351] text-white p-2 border border-gray-300 mt-4 rounded-md">
              Continue</button>   */}
                      
          </form>

        </div>

      
  )
}

export default Step2