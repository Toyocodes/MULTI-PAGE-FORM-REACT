import React from 'react';

const ReviewData = ({ formData  }) => {
  return (
    <div className="review-data">
      <h2>Review Your Data</h2>
      <div>
        <strong>First Name:</strong> {formData.firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {formData.lastName}
      </div>
      <div>
        <strong>Location:</strong> {formData.location}
      </div>
      <div>
        <strong>Professional Summary:</strong> {formData.professionalSummary}
      </div>
      <div>
        <strong>Professional Level:</strong> {formData.professionalLevel}
      </div>
      <div>
        <strong>Years of Professional Experience:</strong> {formData.yearsOfProf}
      </div>
      <div>
        <strong>Professional Skill:</strong> {formData.professionalSkill}
      </div>
      <div>
        <strong>Company:</strong> {formData.company}
      </div>
      <div>
        <strong>Job Title:</strong> {formData.jobTitle}
      </div>
      <div>
        <strong>Start Date:</strong> {formData.startDate}
      </div>
      <div>
        <strong>End Date:</strong> {formData.endDate}
      </div>
      <div>
        <strong>Currently Work Here:</strong> {formData.iCurrentyWorkHere}
      </div>
      <div>
        <strong>Full Time:</strong> {formData.fullTime}
      </div>
      <div>
        <strong>Part Time:</strong> {formData.partTime}
      </div>
      <div>
        <strong>Contract:</strong> {formData.contract}
      </div>
      <div>
        <strong>Job Description:</strong> {formData.jobDescription}
      </div>
      <div>
        <strong>School:</strong> {formData.school}
      </div>
      <div>
        <strong>Degree Level:</strong> {formData.degreeLevel}
      </div>
      <div>
        <strong>Course:</strong> {formData.course}
      </div>
      <div>
        <strong>Year:</strong> {formData.year}
      </div>
      <div>
        <strong>Certificate Title:</strong> {formData.certificateTitle}
      </div>
      <div>
        <strong>Issuing Organisation:</strong> {formData.issuingOrganisation}
      </div>
      <div>
        <strong>Credential URL:</strong> {formData.credentialURL}
      </div>
      <div>
        <strong>Issued Date:</strong> {formData.issuedDate}
      </div>
      <div>
        <strong>LinkedIn:</strong> {formData.linkedin}
      </div>
      <div>
        <strong>Portfolio:</strong> {formData.portfolio}
      </div>
      <div>
        <strong>GitHub:</strong> {formData.github}
      </div>
      <div>
        <strong>Others:</strong> {formData.others}
      </div>
      {/* <button
        onClick={toggleReview}
        className="w-[400px] bg-gradient-to-r from-[#5B3A89] to-[#E43351] text-white p-2 border
        border-gray-300 mt-6 rounded-md"
      >
        Back to Editing
      </button> */}
    </div>
  );
};

export default ReviewData;
