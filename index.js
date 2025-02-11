//Global variables
const BASE_URL = "http://localhost:3000/patients"
const patient = document.getElementById("#patients")
const patientInfo = document.getElementById("#patient-info")
const currentPatient = document.getElementById("#current-patient")
const callList = document.getElementById("#call-list")




//Fetch Data for Patient information
//Displays list of our patients
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
        patientTab.addEventListener('click', () => patientClick(patient))

        patientList.append(patientTab, patientName)
  
      })
    })
  };

  displayPatients();






  //Access and display list of patients
  //Click event to display current patient
  //Add new patients
  //Create button to append new patients to current patient list
  //Submit form for new patient
  //Display patient profile in center of page
  //Create button for pulling profile to add to call list
  //Create a form to make an appointment
  
// -------EXPERIMENTAL CODE---------
//Code was being built for click functions of patients
// const patientClick = (pats) => {
//   patientName.textContent = pats.name
//   patientPhone.textContent = pats.phone
//   patientBirthday.textContent = pats.birthday
//   patientsLastVisit.textContent = pats.last_visited
//   patientMessage.textContent = pats.message
//   patientXray.src = image.image
// };

// const addSubmitListener = () => {
//   const form = document.getElementById('patient-info')
//   form.addEventListener('submit', (event) => {
//     event.preventDefault()

 
//     const name = document.getElementById('name').value
//     const phone = document.getElementById('phone').value
//     const birthday = document.getElementById('birthday').value
//     const lastVisit = document.getElementById('last-visit').value
//     const message = document.getElementById('message').value
//     const image = document.getElementById('image').value

//     const newPatient = {name, phone, birthday, lastVisit, message, image}
    
//     const xrayImage = document.createElement('img')
//     xrayImage.src = image.image
//     xrayImage.alt = image.name
//     xrayImage.addEventListener('click', () => patientClick(newPatient))
//     currentPatient.append(xrayImage)

//     form.reset()
//   }) 
// };

// addSubmitListener()


//Booking appointments to update appointment date
// const bookAppointment = document.querySelector('#patient-appointment');
// bookAppointment.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const nextVisit = document.getElementById('next-visit')
//   const patientId = currentPatient.dataset.id
// },
// //Trying to make a POST method to update to a new appointment date.
// fetch(`${BASE_URL}`, `${patient.id}`),
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
//   body: JSON.stringify(nextVisit)

// )



  
  //Yeji code for adding new patients
  const form = document.querySelector("patient-form")
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
