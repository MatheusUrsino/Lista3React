import "./css/highlight.css";
import { useState } from "react";

function IsHighlight(props) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const classeParagrafo = isHighlighted
    ? "paragrafo-destacado"
    : "paragrafo-normal";
    
  return (
    <>
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        {isHighlighted ? "Remover Destaque" : "Destacar Texto"}
      </button>
      <h4 className={classeParagrafo}>{props.text}</h4>
    </>
  );
}

export default IsHighlight;
