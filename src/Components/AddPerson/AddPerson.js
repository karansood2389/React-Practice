import React from "react";

const AddPerson = (props) => {
  return (
    <div>
        <p>
          Hi I'm {props.name} and I am {props.age} years old.
        </p>
        <label for='Name'> Enter Name</label>
        <input/>
        <label>Enter Age</label>
        <input/>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name} />
        <button onClick={props.click}>Delete Person</button>
      </div>
  );
};

export default AddPerson;
