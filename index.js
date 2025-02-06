
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