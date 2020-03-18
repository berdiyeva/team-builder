import React, {useState} from 'react';
import TeamForm from './TeamForm';
import TeamMember from './TeamMember'
import './App.css';


function App() {
  const [teamState, setTeamState] = useState([
    {id: 1, 
    name: 'John Oliver',
    email: 'johnoliver@gmail.com'}
  ]);


  return (
    <div className="App"> 
      <h1>Team Mermbers</h1>
      {teamState.map(teamMember => (
         <h1>{teamMember.name}</h1>
      
      ))}
      <TeamForm updateTeam={setTeamState} />
      <TeamMember people = {teamState}/>
    </div>
  );
  
}
console.log(App)

export default App;
