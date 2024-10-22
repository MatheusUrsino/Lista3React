function Map(props) {
    return (
      <>
      <h1>{props.titulo}</h1>
        <ul>
          {props.nomes.map((nome, index) => (
            <li key={index}>{nome}</li>
          ))}
        </ul>
      </>
    );
  }
  
  export default Map;
  