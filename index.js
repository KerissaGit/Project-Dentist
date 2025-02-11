//Global variables
const BASE_URL = "http://localhost:3000/patients"
const patient = document.getElementById("patients")
const patientInfo = document.getElementById("patient-info")
const currentPatient = document.getElementById("current-patient")
const callList = document.getElementById("call-list")



//Open profile when clicking on patientname on "displayPatients"
const openProfile = (patient) =>{
  patientcurrent=patient
  const image = document.querySelector("#xray-image")
  image.src=patient.image_url
  image.alt=patient.name
  const name = document.querySelector("#patient-name")
  name.textContent = patient.name
  const phone = document.querySelector("#patient-phone")
  phone.textContent = patient.phone_number
  const birthday = document.querySelector("#patient-birthday")
  birthday.textContent=patient.birthday
  const lastvisit = document.querySelector("#patient-last-visit")
  lastvisit.textContent=patient.last_visited
  const message = document.querySelector("#patient-message")
  message.textContent=patient.message
  const appointment1 = document.querySelector("#patient-appointment")
  appointment1.textContent = patient.appointment
  const form = document.querySelector(".patient-appointment")

  form.reset()

  form.removeEventListener("submit", handleSubmit)

  form.addEventListener("submit", handleSubmit)

  form.reset()


    
  function handleSubmit(e){
    e.preventDefault()
   const newappointment = e.target["next-visit"].value
  
  
  
  fetch(`http://localhost:3000/patients/${patientcurrent.id}`,{
    method: `PATCH`,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify ({
      appointment:newappointment
    })})

    .then(resp=>resp.json())
    .then((data)=>{
      
      document.querySelector("#patient-appointment").textContent = newappointment
    })
    .catch((error) => console.error("Error updating appointment:", error));


  }
}




//Fetch Data for Patient information
const displayPatients = () => {
    fetch(BASE_URL)
    .then(response=>response.json())
    .then(patients=>{
      //const data = patients.data
      const patientList = document.querySelector('#patients ul')

      patients.forEach(patient => {

        const patientTab = document.createElement('li')
        patientTab.textContent = `${patient.name}`
        //patientTab.dataset.patientId = patient.id
   
        //const img = document.createElement('img')
        //img.src = patient.image
        //img.alt = `${patient.name}`

        //const patientName = document.createElement('h3')
        
        patientTab.addEventListener("click",()=>openProfile(patient))
        patientList.append(patientTab)
        

      })
    })
  };
  
  displayPatients();
  
  //Adding new patients
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
    } 
    fetch('http://localhost:3000/patients', {
      method:'POST',
      headers:{
         "Content-Type":'application/json'
       },
       body: JSON.stringify(newPatient)
       })
     .then(resp=>resp.json())
     .then((data)=>console.log(data));
      
     const patientList = document.querySelector('#patients ul');
      const patientTab = document.createElement('li');
      patientTab.textContent = `${data.name}`;
      patientTab.addEventListener("click", () => openProfile(data));

      patientList.append(patientTab);
    })
    .catch((error) => console.error("Error adding new patient:", error));
    
  
  //Yeji code for adding new patients
  function addnewpatient(){
    const form = document.querySelector(".patient-form")
    const patientList1 = document.querySelector('#patients ul')
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
      };
    });
  };
  
        fetch('http://localhost:3000/patients', {
        method:'POST',
        headers:{
           "Content-Type":'application/json'
         },
         body: JSON.stringify(newPatient)
         })
       .then(resp=>resp.json())
       .then((data)=>{
        console.log(data)
        const newpatientitem = document.createElement('li');
       newpatientitem.textContent = `${data.name}`;
       patientList1.append(newpatientitem);
  
    });



// Creating a call list
let calls = [];
//Click Event Listener for call button
const callButton = document.getElementById('call-button')
//Adds and removes a call and limits to only 1
function callClick() {
  const name = document.querySelector("patient-name")
    if (!calls.includes(`${patient.name}`)){
      const copyName = name.cloneNode(true)
      copyName.addEventListener('click', function(){
        copyName.remove()
        calls = calls.filter(function(calledPatient){
          return calledPatient !== copyName.name
        })
      });
      callList.appendChild(copyName)
      calls.push(copyName.name)
    };
}

callClick();
  
  
  
  //Access and display list of patients
  //Click event to display current patient
  //Add new patients
  //Create button to append new patients to current patient list
  //Submit form for new patient
  //Display patient profile in center of page
  //Create button for pulling profile to add to call list
  //Create a form to make an appointment

//------------------------------------------------------------------
//-----------------------------BREAK-------------------------------------
//------------------------------------------------------------------


  //function getPatientsData() {
   // fetch(BASE_URL)
   // .then((resp) => resp.json())
   // .then((patients) => patients.forEach(displayPatients))
    
  //}
//Fetch Data for Patient information
//Displays list of our patients
// const displayPatients = () => {
//     fetch(BASE_URL)
//     .then(response=>response.json())
//     .then(patients=>{
  //       const data = patients.data
  //       const patientList = document.querySelector('#patients ul')
  
//       patients.forEach(patient => {

//         const patientTab = document.createElement('li')
//         patientTab.textContent = `${patient.name}`
//         patientTab.dataset.patient = patient.id
        
//         const img = document.createElement('img')
//         img.src = patient.image
//         img.alt = `${patient.name}`

//         const patientName = document.createElement('h3')
//         patientTab.addEventListener('click', () => patientClick(patient))

//         patientList.append(patientTab, patientName)
  
//       })
//     })
//   };

//   displayPatients();






  
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



  
