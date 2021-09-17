import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './Components/PersonForm'
import Display from './Components/Display'
import Filter from './Components/Filter'
// const Filter = ({persons}) => {
//   const [filterName, setFilter] = useState('')
//   const[submissionState, setState] = useState(false)
//   const handleFilterChange = (event) => {
//     // const filteredPersons = persons.filter((person) => person.name === filterName)
//     setFilter(event.target.value)
//     setState(false)
//   }

//   const applyFilter = (event) => {
//     event.preventDefault()
//     setFilter(filterName)
//     setState(true)
//   }



//   const filteredPersons = persons.filter((person) => person.name.includes(filterName))
  


//   return (
//     <>
//       <div>
//         <form onSubmit = {applyFilter} >
//           <div>
//         filter shown with <input onChange = {handleFilterChange} value = {filterName} />
//         {console.log(filterName)}
        
//         {filteredPersons.map((person) => 
//           <Display key = {person.name} content = {person.name} number = {person.number} state = {submissionState} />
//         )}
//         </div>
//         </form>
//       </div>
//     </>
//   )
// }
const App = () => {

  
  
  const [persons, setPersons] = useState([])

  const [ newName, setNewName ] = useState('')

  const [newNumber, setNewNumber] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    if(allNames.includes(nameObject.name)){
      alert (`${nameObject.name} is already present in the phonebook.`)
      return;
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }
    const hook = () => {
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          setPersons(response.data)
          // console.log(response.data)
        })
    }
    
    useEffect(hook, [])
    // console.log(persons)
    
    

  let allNames = persons.map((names) => names.name)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons = {persons} />
      <h2>Add Numbers </h2>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}
        addPerson={addPerson} />
      <h2>Numbers</h2>
      {persons.map((person) => 
        <Display key = {person.name} content = {person.name} number = {person.number} state = {true} />
      )}
    </div>
  )
}


export default App;
