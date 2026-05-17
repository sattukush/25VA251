 import React from 'react'
 import './StudentCard.css';
 
 function StudentCard(props) {
   return (
         <div className="student-card">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>Marks:</strong> {props.marks}</p>
    </div>

   )
 }
 
 export default StudentCard