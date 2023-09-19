import React from 'react'
import pix from '../assets/images/pix.svg'

function StepOne({formData, setFormData}) {
  return (
    <div className='flex items-center justify-center'>
         
         <div className="form1 data-info">

        <div className="form-header flex items-center space-x-4 mt-12">
            <img src={pix} alt="" />
            <p className="text-gradient text-sm font-semibold">Upload photo</p>
        </div>

            <form action="" id="step1" className="step-section active">
                <div className="form-row flex space-x-4 mt-5">
                    <div>
                        <label htmlFor="firstName" className="block mb-2 mt-4 text-sm">First Name</label> 
                        <input type="text" value={formData.firstName} onChange={(event)=> setFormData({...formData, firstName: event.target.value})}
                         className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" id="firstName" placeholder="Enter first name"/>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block mb-2 mt-4 text-sm">Last Name</label> 
                        <input type="text" value={formData.lastName} onChange={(event)=> setFormData({...formData, lastName: event.target.value})} 
                        className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" id="firstName" placeholder="Enter last name"/>
                    </div> 
                </div>

                    <div className="form-row">
                        <label htmlFor="location" className="block mb-2 mt-4 text-sm">Location</label>
                        <input type="text" value={formData.location} onChange={(event)=> setFormData({...formData, location: event.target.value})}
                        className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="Enter your city"/>
                    </div>

                    <div className="form-row mb-1">
                        <label htmlFor="professionalSummary" className="block mb-2 mt-4 text-sm">Professional Summary</label> 
                        <textarea value={formData.professionalSummary} onChange={(event)=> setFormData({...formData, professionalSummary: event.target.value})} 
                        className="form-control w-full px-4 pt-4 pb-32 border border-gray-300 rounded-md resize-none" placeholder="Enter your bio"></textarea>
                    </div>  

                    <div className="form-row">
                        <label htmlFor="professionalLevel" className="block mb-2 mt-4 text-sm">Professional Level</label> 
                        <select name="select" id="select" value={formData.professionalLevel} onChange={(event)=> setFormData({...formData, professionalLevel: event.target.value})} 
                        className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" placeholder="Select">
                            <option value="option1">Select</option>
                            <option value="option2">Product Management</option>
                            <option value="option3">Project Management</option>
                            <option value="option2">Frontend developer</option>
                            <option value="option3">UI/UX Designer</option>
                        </select>
                    </div> 
                    <div className="form-row">
                        <label htmlFor="yearsOfProf" className="block mb-2 mt-4 text-sm">Years of Professional Experience</label> 
                        <input type="text" value={formData.yearsOfProf} onChange={(event)=> setFormData({...formData, yearsOfProf: event.target.value})} 
                        className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="Enter years of experience"/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="ProfessionalSkill" className="block mb-2 mt-4 text-sm">Professional Skills</label> 
                        <input type="text" value={formData.professionalSkill} onChange={(event)=> setFormData({...formData, professionalSkill: event.target.value})} 
                        className="form-control text-sm w-full p-3 border border-gray-300 rounded-md items-center" id="location" placeholder="Enter skills, separate with comma"/>
                    </div>  
            </form>
    </div>
   
    </div>

 
  )
}

export default StepOne;
 