import React, { useState } from 'react'
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

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

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
