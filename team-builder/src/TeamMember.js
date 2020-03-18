import React from "react";

const TeamMember = props => {
  return (
    <div className="member-list">
      {props.people.map(members => (
        <div key={members.id}>
          <h2>{members.name}</h2>
          <p>{members.email}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMember;