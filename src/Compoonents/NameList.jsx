import React from 'react'
import Person from './Person'


function NameList() {
    const names = ['bruce' , 'clark', 'Diana']
    const persons = [
        {
            id:1,
            name: 'Bruce',
            age: 25,
            skill: 'React'
        },
        {
            id:2,
            name: 'Diana',
            age: 20,
            skill: 'next js'
        },
        {
            id:3,
            name: 'rose',
            age: 28,
            skill: 'Vue'
        },
        {
            id:4,
            name: 'fredy',
            age: 27,
            skill: 'Angular'
        },
    ]
    //const personList = persons.map(person => <Person key = {person.id} person = {person} />)
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return (
    <div>
        {/* {personList} */}
        {nameList}
    </div> 
  )
}

export default NameList