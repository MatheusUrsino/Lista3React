import { useState } from "react";
import "./css/Keys.css";

function ListOfTask (props) {
    const [taskList, setTaskList] = useState(props.task); 
    
    const removeTask = (indexRemove) => {
      const newTaskList = taskList.filter((_, index) => index !== indexRemove);
      setTaskList(newTaskList);
    };
  
    return (
      <div className="keys-list">
        {taskList.map((task, index) => ( 
          <div key={index} className="task">
            <p>{task}</p>
            <button onClick={() => removeTask(index)}>Remover</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ListOfTask;