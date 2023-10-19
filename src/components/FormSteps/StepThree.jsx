import React from 'react'

const Step3 = () => {
  return (
    <div className='flex items-center justify-center mt-8'>
       
        <div className="form3 data-info">
            
            <form className="w-[400px]">

                <div className="form-row">
                    <label for="school" className="block mb-2 mt-4 text-sm">School</label>
                    <input type="text" className="form-control text-sm w-[400px] p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="Enter school name"/>
                </div>

                <div className="form-row">
                    <label for="degree" className="block mb-2 mt-4 text-sm">Degree Level</label> 
                    <select name="select" id="select" className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" placeholder="Select">
                        <option value="option1">Select</option>
                        <option value="option2">Bachelor's Degree</option>
                        <option value="option3">Masters Degree</option>
                        <option value="option2">HND</option>
                        <option value="option3">OND</option>
                    </select>
                </div>  

                <div className="form-row">
                    <label for="school" className="block mb-2 mt-4 text-sm">Course</label>
                    <input type="text" className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="Enter course title"/>
                </div>

                <div className="form-row">
                    <label for="year" className="block mb-2 mt-4 text-sm">Year</label>
                    <input type="year" className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="Enter year"/>
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

export default Step3