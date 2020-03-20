import React, {useState} from "react";

export default function TeamForm(props) {
    
    const [state, setState] = useState({name:"", email:""});

    const newMember = (e) => {
        setState({...state, [e.target.name]:e.target.value})
        console.log(state)
        }
    
       
        const formSubmitHandler = event => {
            event.preventDefault();
        
            props.updateTeam({
              ...state,
              id: Date.now()
            });
        }
        
    return (
        <form className="form" 
        onSubmit={formSubmitHandler}
        >
           <label htmlFor="name" className="label">Name:</label>
           <input name="name" onChange={newMember} type="text" className="box" placeholder="Please enter your name"></input> 
           <label htmlFor="email" className="label">Email:</label>
           <input name="email" onChange={newMember} type="text" className="box" placeholder="Please enter your email"></input>
           <button type="submit">Submit</button>
        </form>
    )
}