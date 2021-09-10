import React, {useState} from 'react';
import PartA from './components/PartA';
import PartB from './components/PartB';
//import './App.css';​
function App() {
    const [notes, setNotes] = useState([]);
    function addNote(newNote){
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }
    function deleteNote(id){
      console.log("Block deleted", id);
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) =>{
          return index!==id;
        });
      });
    }
    /*function statusResolved(id){
      console.log("Block Resolved", id);
      setNotes(prevNotes=> {
        return{
          ...prevNotes,
        [resolved]: "Resolved"
        } ;
      })
    }*/
    function statusResolved(id){
    }
    function statusRejected(id){
      console.log("Block Reject", id);
    }
    //notes[0].resolved="resolved";
    console.log(notes);
    //console.log("vsdfgsd", notes[0].resolved);
  return (
    <div className="App">
      <PartA onAdd={addNote} />
      {notes.map((noteItem, index) =>{
        return (
          <PartB 
            key={index}
            id={index}
            email={noteItem.email}
            title={noteItem.title}
            desciption={noteItem.desciption}
            resolved={noteItem.resolved}
            rejected={noteItem.rejected}
            onDelete={deleteNote}
            onResolved={statusResolved}
            onRejected={statusRejected}
          />
        );
      })}
    </div>
  );
}
export default App;
/*
1. Divide your UI screen in 2 parts
    a. Part A 
    b. Part B
2. Part A should display a form which collect the following details related to a grievance.
    Form should contain the following details:
    a. Email
    b. Title
    c. Description
3. On submit, the grievance details should be displayed in the Part B and the form in Part A should be reset
4. In Part B, when the grievance details are displayed, display 2 buttons
    a. One button named 'Resolved' (displayed in green color). On clicking this button update the status grievance to resolved.
    b. Other button named 'Rejected' (displayed in red color). On clicking this button update the status grievance to rejected.
5. If the status of the grievance is null, display the above 2 buttons.
    - else if the status is resolved, display a text 'Resolved' (in green color) instead of the above 2 buttons
    - else if the status is rejected, display a text 'Rejected' (in red color) instead of the above 2 buttons
​
​
​
    reset 
    ui 
​
​
    */