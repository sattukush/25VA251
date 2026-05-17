/* import React from 'react'

function Props(props) {

  return (
    <>
    
       <div style={{backgroundColor:'#f5f5f5', padding:'5px 10px'}}>
       <h3>{props.name}</h3>
       <h3>{props.rollno}</h3>
       <h3>{props.course}</h3>
       </div>
    </>
   
  )
}

export default Props */

//For multiple data
/* import React from "react";

function Props({ students }) {
  return (
    <div style={{ display: "flex", gap: "10px", margin: "0 auto" }}>
      {students.map((student, index) => (
        <div
          key={index}
          style={{ backgroundColor: "#F5f5f5", padding: "0 10px" }}
        >
          <h3>{student.name}</h3>
          <h3>{student.rollno}</h3>
          <h3>{student.course}</h3>
        </div>
      ))}
    </div>
  );
}

export default Props; */

// using for in loops
import React from 'react';
function Props({ students }) {

  const studentList = [];
  for (let x in students) {
    studentList.push(
      <div key={x} style={{backgroundColor:'#f5f5f5', padding:'5px 10px'}}>
        <h3>{students[x].name}</h3>
        <h3>{students[x].rollno}</h3>
        <h3>{students[x].course}</h3>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', gap: '10px', margin: '0 auto' }}>
      {studentList}
    </div>
  );
}

export default Props;