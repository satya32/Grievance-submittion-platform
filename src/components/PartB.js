import React, { useState } from 'react';
function PartA(props){
    const [note, setNote] = useState({
        email:"",
        title:"",
        desciption:"",
    });
    function handleChange(event){     
        const {name , value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            email:'',
            title:'',
            desciption:''
        })
        event.preventDefault();
    }
    return (
        <div className="left" >
            <h1> Part A </h1>
            <form>
                <input
                    name="email"
                    onChange={handleChange}
                    value={note.email}
                    placeholder="Email"
                />
                <br /> 
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <br /> 
                <textarea 
                    name="desciption"
                    onChange={handleChange}
                    value={note.desciption}
                    placeholder="Take a Description..."
                    row='3'
                />
                <br /> 
                <button onClick={submitNote}> Submit </button>
            </form>
        </div>
    );
}
export default  PartA;
/*
className="split left"
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
    */