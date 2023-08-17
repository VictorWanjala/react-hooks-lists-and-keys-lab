import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Navbar from './Navbar';
function App() {

  function getStudentName(event){
    event.preventDefault()
    console.log(event.target.value)
  }

  function getStudentPhoto(event){
  event.preventDefault()
  console.log(event.target.value)
  }

  function partyingShot(event){
    event.preventDefault()
    console.log(event.target.value)
  }


  const [name, setName] = useState('')
  function changeName(event){
    event.preventDefault()
    setName(event.target.value)
    console.log(name)
  }

  const [image, setImage] = useState('')
  function changeImage(event){
    event.preventDefault()
    setImage(event.target.value)
    console.log(image)
  }
  
  const [Memo, setMemo] = useState('')
  function changeMemo(event){
    event.preventDefault()
    setMemo(event.target.value)

    const [students, setStudents] = useState([])
    function getStudents(event){
      event.preventDefault()
      let student = {
        studentName: name,
        studentImage: image,
        studentMemo: Memo
      }
      console.log(student)
      let newArray = [...students, student]
      setStudents(newArray)
    }

    console.log(students)
    
  }
  return (
    <div className="App">
     <h1>Hello, this is a react app</h1>
     <Navbar/>

    

    <form onSubmit={getStudents}>
      <input placeholder="add student name" onChange={changeName} />
      <input placeholder="add student photo link" onChange={changeImage}/>
      <input placeholder="add student partying shot" onChange={changeMemo}/>

      <button>Submit</button>
    </form>
    </div>

    //onChange, onSubmit, onClick

  );
}

export default App;
