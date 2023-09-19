import React from 'react'

const Step5 = () => {
  return (
    <div className='flex items-center justify-center mt-20'>
     
        <div className="form5 data-info">

          <form className="w-[400px]">

              <div className="form-row">
                  <label for="linkedin" className="block mb-2 mt-4 text-sm">LinkedIn</label>
                  <input type="text" className="form-control text-sm w-[400px] p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="Enter URL"/>
              </div>

              <div className="form-row">
                  <label for="portfolio" className="block mb-2 mt-4 text-sm">Portfolio</label>
                  <input type="text" className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="Enter URL"/>
              </div>

              <div className="form-row">
                  <label for="github" className="block mb-2 mt-4 text-sm">Github(Optional)</label>
                  <input type="text" className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="Enter URL"/>
              </div>

              <div className="form-row">
                  <label for="github" className="block mb-2 mt-4 text-sm">Others(Optional)</label>
                  <input type="text" className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="Enter URL"/>
              </div>

              {/* <button className="w-full bg-gradient-to-r from-[#5B3A89] to-[#E43351] text-white p-2 border border-gray-300 mt-4 rounded-md">
              Continue</button>   */}
                      
          </form>

        </div>
      </div>
 
  )
}

export default Step5