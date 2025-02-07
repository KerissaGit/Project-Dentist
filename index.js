//Fetch Data for Patient infor
const displayPatients = () => {
    fetch('http://localhost:3000/patients')
    .then(response=>response.json())
    .then(patients=>{
      patients.forEach(patient=>{
        const img = document.createElement('img')
        img.src = patient.image
        img.alt = patient.name
        'Where to Append'.append(img)
  
  
      })
    })
  };

  //Globals 


  //Access and display list of patients
  //Click event to display current patient
  //Add new patients
  //Create button to append new patients to current patient list
  //Submit form for new patient
  //Display patient profile in center of page
  //Create button for pulling profile to add to call list
  //Create a form to make an appointment
  
