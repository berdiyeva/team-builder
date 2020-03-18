import React, {useState} from "react";

const TeamForm = props => {
    
    const [state, setState] = useState({name:"", email:""});

    const newMember = (e) => {
        setState({...state, [e.target.name]:e.target.value})
        }
       
        // const formSubmitHandler = event => {
        //     event.preventDefault();
        
        //     props.addNote({
        //       ...formState,
        //       id: Date.now()
        //     });
        
    return (
        <form className="form" 
        // onSubmit={formSubmitHandler}
        >
           <label htmlFor="name" className="label">Name:</label>
           <input name="name" onChange={newMember} type="text" className="box" placeholder="Please enter your name"></input> 
           <label htmlFor="email" className="label">Email:</label>
           <input name="email" onChange={newMember} type="text" className="box" placeholder="Please enter your email"></input>
           <button type="submit">Submit</button>
        </form>
    )
}

export default TeamForm;