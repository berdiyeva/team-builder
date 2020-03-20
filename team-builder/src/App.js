import React, {useState} from 'react';
import TeamForm from './TeamForm';
import TeamMember from './TeamMember'
import './App.css';


export default function App() {
  const teamState =[
    {id: 1, 
    name: 'John Oliver',
    email: 'johnoliver@gmail.com'}
  ];
  

  function newMember (member) {
    console.log(member)
    teamState.push(member);
    console.log(teamState)
  }

  
  return (
    <div className="App"> 
      <h1>Team Mermbers</h1>
      {teamState.map(teamMember => (
         <h1>{teamMember.name}</h1>
          
      ))}
      <TeamForm updateTeam={newMember} team={teamState} />
      <TeamMember people = {teamState}/>
    </div>
  );
  
}
// console.log(App) App;
