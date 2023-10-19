import React from 'react'

const Step6 = () => {
  return (
    <div className='flex items-center justify-center mt-8'>
      
            <div className="form6 data-info">

                <form className='w-[400px]'>

                    <p className='mb-2 text-sm text-gray-500'>EXPERIENCED LEVEL</p>

                    <div class="form-row flex mb-2 justify-between">
                        <p className='text-sm'>Internship</p>
                        <input type="checkbox" className='w-6 h-6' />
                    </div>

                    <div class="form-row flex mb-2 justify-between">
                        <p className='text-sm'>Entry Level</p>
                        <input type="checkbox" className='w-6 h-6' />
                    </div>

                    <div class="form-row flex mb-2 justify-between">
                        <p className='text-sm'>Mid Level</p>
                        <input type="checkbox" className='w-6 h-6' />
                    </div>

                    <div class="form-row flex mb-2 justify-between">
                        <p className='text-sm'>Senior Level</p>
                        <input type="checkbox" className='w-6 h-6' />
                    </div>

                    <div class="form-row flex mb-2 justify-between">
                        <p className='text-sm'>Executive</p>
                        <input type="checkbox" className='w-6 h-6' />
                    </div>

                    <div class="form-row flex mt-4 mb-2 text-gray-500">
                        <p className='text-sm mr-20'>WORK MODE</p>
                        <p className='text-sm'>JOB TYPE</p>
                    </div>

                    <div class="form-row flex mb-2 justify-between">
                        <p className='text-sm'>Remote</p>
                        <input type="checkbox" className='w-6 h-6' />
                        <p className='text-sm'>Full-time</p>
                        <input type="checkbox" className='w-6 h-6' />
                    </div>

                    <div class="form-row flex mb-2 justify-between">
                        <p className='text-sm'>Onsite</p>
                        <input type="checkbox" className='w-6 h-6 ml-2.5' />
                        <p className='text-sm'>Part-time</p>
                        <input type="checkbox" className='w-6 h-6' />
                    </div>

                    <div class="form-row flex mb-2 justify-between">
                        <p className='text-sm'>Hybrid</p>
                        <input type="checkbox" className='w-6 h-6 ml-1.5' />
                        <p className='text-sm'>Contract</p>
                        <input type="checkbox" className='w-6 h-6' />
                    </div>

                    <div class="form-row">
                    <label for="github" class="block mb-2 mt-4 text-sm text-gray-500">COMPENSATION (PER ANNUM)</label>
                    <input type="text" class="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="USD"/>
                    </div>    

                    {/* <button class="w-full bg-gradient-to-r from-[#5B3A89] to-[#E43351] text-white p-2 border border-gray-300 mt-4 rounded-md">
                    Save and Review</button>   */}
                            
                </form>

            </div>
        </div>
 
  )
}

export default Step6