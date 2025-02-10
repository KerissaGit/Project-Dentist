//Global variables
const BASE_URL = "http://localhost:3000/patients"
const patient = document.getElementById("#patients")
const patientInfo = document.getElementById("#patient-info")
const currentPatient = document.getElementById("#current-patient")
const callList = document.getElementById("#call-list")




//Fetch Data for Patient information
const displayPatients = () => {
    fetch(BASE_URL)
    .then(response=>response.json())
    .then(patients=>{
      const data = patients.data
      const patientList = document.querySelector('#patients ul')

      patients.forEach(patient => {

        const patientTab = document.createElement('li')
        patientTab.textContent = `${patient.name}`
        patientTab.dataset.patient = patient.id
        
        const img = document.createElement('img')
        img.src = patient.image
        img.alt = `${patient.name}`

        const patientName = document.createElement('h3')

        patientList.append(patientTab, patientName)
  
      })
    })
  };

  displayPatients();

  function getPatientsData() {
    fetch(BASE_URL)
    .then((resp) => resp.json())
    .then((patients) => patients.forEach(displayPatients))
    
  }





  //Access and display list of patients
  //Click event to display current patient
  //Add new patients
  //Create button to append new patients to current patient list
  //Submit form for new patient
  //Display patient profile in center of page
  //Create button for pulling profile to add to call list
  //Create a form to make an appointment
  








  
  //Yeji code for adding new patients
  const form = document.querySelector(".patient-form")
  console.log(form)
  form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const newPatient={
      name:event.target['name'].value,
      phone_number:event.target['phone'].value,
      birthday:event.target['birthday'].value,
      last_visited:event.target['last-visit'].value,
      message:event.target['message'].value,
      appointment:"",
      image_url:""
    }}) //temporarily added '})' to finish code here
    //code below is erroring out for me
    //call function for makeing list of patients (newPAtient)
  //   fetch('http://localhost:3000/patients',%7B
  //     method:'POST',
  //     headers:{
  //       "Content-Type":'application/json'
  //     },
  //     body: JSON.stringify(newPatient)
  //   })
  //   .then(resp=>resp.json())
  //   .then((data)=>console.log(data))
  // })
