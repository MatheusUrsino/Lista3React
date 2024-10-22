import { useState } from "react";

function Visible(props) {
const  [visible, setVisible] = useState(false);

const handleCheckboxChange = () => {
    setVisible(!visible)
}

    return (
      <>
        <input type="checkbox" 
        name="IsVisible" 
        id="" 
        checked={visible}
        onChange={handleCheckboxChange}
         />
        {visible ? <p>{props.paragrafo}</p> : null}
      </>
    );
  }
  
  export default Visible;