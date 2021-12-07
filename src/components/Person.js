
import React from "react";

const Person = (props) => {
  return (
    <>
            <img
              src={props.img}
              />
         
            <h4>{props.name}</h4>
            <p class="text-muted">{props.role}</p>
         </>
  );
};

export default Person;