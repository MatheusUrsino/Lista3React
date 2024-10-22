import React from 'react';

function Fragments (props) {

  return (
    <>
      <h1>{props.titulo}</h1>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>{props.paragrafo}</p>
    </>
  );
};

export default Fragments;