//Access and display list of patients
//Click event to display current patient
//Add new patients
//Create button to append new patients to current patient list
//Submit form for new patient
//Display patient profile in center of page
//Create button for pulling profile to add to call list
//Create a form to make an appointment


//Global variables
const BASE_URL = "http://localhost:3000/patients"
const patient = document.getElementById("#patients")
const patientInfo = document.getElementById("#patient-info")
const currentPatient = document.getElementById("#current-patient")
const callList = document.getElementById("#call-list")
let patientcurrent = null
let array=[]
let lastClickedPatient=null

function formatDate(dateString) {
  const date = new Date(dateString)
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()

  return `${month}-${day}-${year}`
}


//Open profile when clicking on patientname on "displayPatients"



const openProfile = (patient) =>{
  lastClickedPatient=patient
  patientcurrent=patient
  const image = document.querySelector("#xray-image")
  image.src=patient.image_url
  image.alt=patient.name
  const name = document.querySelector("#patient-name")
  name.textContent = patient.name
  const phone = document.querySelector("#patient-phone")
  phone.textContent = 'Phone Number: ' + patient.phone_number
  const birthday = document.querySelector("#patient-birthday")
  birthday.textContent= 'Birthday: ' + patient.birthday
  const lastvisit = document.querySelector("#patient-last-visit")
  lastvisit.textContent= 'Last Date Visited: ' + patient.last_visited
  const message = document.querySelector("#patient-message")
  message.textContent= 'Special Note: ' + patient.message
  const form = document.querySelector("form.patient-appointment")


  


  const button = document.querySelector("#call-button")
  const callList = document.querySelector('#call-list')
  


  button.addEventListener("click", ()=> call(lastClickedPatient))
  form.addEventListener("submit", handleSubmit)

  function call(patient){
    const callListnames = document.createElement('li')
        callListnames.textContent = `${patient.name} ${patient.phone_number}`
        if (!array.includes(patient.name)){
        callList.append(callListnames)
        array.push(patient.name) 
      }     

      const deleteButton = document.createElement('button')
      deleteButton.textContent = ' 🗑️ '
      callListnames.appendChild(deleteButton)
      deleteButton.addEventListener('click', ()=>deletebuttonFunc(callListnames)
     )

  }

  function deletebuttonFunc(callListnames){
    const index = array.indexOf(patient.name)
    if (index>=0) {
      array.splice(index, 1)
    }
    callListnames.remove()

}
    
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

  
  //Code for adding new patients
  function addnewpatient(){
  const form = document.querySelector(".patient-form")
  const patientList1 = document.querySelector('#patients ul')
  console.log(form)
  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const newPatient={
      name:event.target['name'].value,
      phone_number:event.target['phone'].value,
      birthday:event.target['birthday'].value,
      last_visited:event.target['last-visit'].value,
      message:event.target['message'].value,
      appointment:"",
      //image_url:event.target['image'].value // Doesnt save img. Tried using event.target['image_url'].src
    }
    form.reset

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
      const newpatientitem = document.createElement('li')
      newpatientitem.textContent = `${data.name}`
      patientList1.append(newpatientitem)
    
    })
  })
}
     
addnewpatient();
   