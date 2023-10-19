import React from 'react'
import calendar from '../../assets/images/calendar.png'

const Step4 = () => {
  return (
    <div className='flex items-center justify-center mt-8'>
      
        <div className="form4 data-info">

          <form className="w-[400px]">

              <div className="form-row">
                  <label for="certificate" className="block mb-2 mt-4 text-sm">Certificate Title</label>
                  <input type="text" className="form-control text-sm w-[400px] p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="Enter certificate title"/>
              </div>

              <div className="form-row">
                  <label for="certificate" className="block mb-2 mt-4 text-sm">Issuing Organisation</label>
                  <input type="text" className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="Enter issuing Organisation"/>
              </div>

              <div className="form-row">
                  <label for="certificate" className="block mb-2 mt-4 text-sm">Credential URL(Optional)</label>
                  <input type="text" className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="Enter Credential URL"/>
              </div>

              <div className='form-row'>
                      <label for="startdate" className="block mb-2 mt-4 text-sm">Issued date</label> 
                      <select type="date" name="select" id="select" className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" placeholder="Select"> <img src={calendar} alt="" /> 
                        <option value="option1">Select</option>
                        <option value="option2">1</option>
                        <option value="option3">2</option>
                        <option value="option2">3</option>
                        <option value="option3">4</option>
                    </select>
                </div>

            <div className='mt-4'>
                <button className="w-full bg-transparent text-[#E43351] text-xs p-2 border border-[#E43351] rounded-md">
                Save and add new</button>  
            </div> 

              {/* <button className="w-full bg-gradient-to-r from-[#5B3A89] to-[#E43351] text-white p-2 border border-gray-300 mt-4 rounded-md">
              Continue</button>   */}
                      
          </form>

        </div>
   
    </div>
  )
}

export default Step4