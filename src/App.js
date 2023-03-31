import React from "react";
import './App.scss';
// import TaskInput from "./components/TaskInput";
import plus from "./assets/plus.svg";

const Header = () => {
  return(
      <header className="header">
          <div>My tasks</div>
      </header>
  )
}

const TaskInput = ({text, setText, addToListTasks}) => {

    return(
        <div className="taskInput">
            <input className="input" value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter task text"/>
            <button className="button" onClick={() => addToListTasks(text)}>
                <img className="plus" src={plus} alt="plus"/>
            </button>
        </div>
    )
}

const Task = ({task, removeTask}) => {
    const [success, setSuccess] = React.useState(false)
    const toggleSuccess = () => {
        setSuccess(!success)
        console.log(success)
    }
  return(
      <div className="task">
          <div onClick={toggleSuccess}
               // className="checkbox"
               className={`checkbox ${success ? "" : "checkboxEmpty"}`}
          >
              <svg className="svg"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.43434 0.26763C8.60579 0.0968096 8.83724 0.000672966 9.07865 3.51967e-06C9.32006 -0.000665926 9.55204 0.0941856 9.72442 0.264052C9.89681 0.433918 9.99575 0.665151 9.99987 0.907757C10.004 1.15036 9.91293 1.38485 9.74641 1.56052L4.85587 7.70484C4.77182 7.79584 4.67038 7.86886 4.55761 7.91955C4.44483 7.97023 4.32305 7.99754 4.19954 7.99984C4.07602 8.00214 3.95332 7.97938 3.83876 7.93293C3.72419 7.88647 3.62013 7.81727 3.53278 7.72947L0.292438 4.47138C0.202165 4.38683 0.12976 4.28488 0.0795416 4.1716C0.029323 4.05832 0.0023197 3.93603 0.000142992 3.81203C-0.00203372 3.68803 0.0206608 3.56487 0.0668722 3.44987C0.113084 3.33488 0.181865 3.23042 0.269114 3.14273C0.356363 3.05504 0.460292 2.98591 0.5747 2.93946C0.689108 2.89301 0.811652 2.8702 0.935022 2.87239C1.05839 2.87458 1.18006 2.90172 1.29277 2.95219C1.40547 3.00267 1.50691 3.07544 1.59103 3.16617L4.15635 5.74334L8.41107 0.294719C8.41866 0.285181 8.42684 0.276133 8.43557 0.26763H8.43434Z"
                      fill="white"
                  />
              </svg>
          </div>
          {/*<div className="checkboxEmpty"></div>*/}
          <div className={`${success ? "throughLine" : ""}`}> {task}</div>
          <div className="remove" onClick={() => removeTask(task)}>
              <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M19 4.00138H14V2.33138C13.9765 1.6912 13.7002 1.08644 13.2316 0.649671C12.7629 0.212905 12.1402 -0.0202285 11.5 0.00137844H8.5C7.85975 -0.0202285 7.23706 0.212905 6.76843 0.649671C6.2998 1.08644 6.02346 1.6912 6 2.33138V4.00138H1C0.734784 4.00138 0.48043 4.10674 0.292893 4.29427C0.105357 4.48181 0 4.73616 0 5.00138C0 5.2666 0.105357 5.52095 0.292893 5.70849C0.48043 5.89602 0.734784 6.00138 1 6.00138H2V17.0014C2 17.797 2.31607 18.5601 2.87868 19.1227C3.44129 19.6853 4.20435 20.0014 5 20.0014H15C15.7956 20.0014 16.5587 19.6853 17.1213 19.1227C17.6839 18.5601 18 17.797 18 17.0014V6.00138H19C19.2652 6.00138 19.5196 5.89602 19.7071 5.70849C19.8946 5.52095 20 5.2666 20 5.00138C20 4.73616 19.8946 4.48181 19.7071 4.29427C19.5196 4.10674 19.2652 4.00138 19 4.00138ZM8 2.33138C8 2.17138 8.21 2.00138 8.5 2.00138H11.5C11.79 2.00138 12 2.17138 12 2.33138V4.00138H8V2.33138ZM16 17.0014C16 17.2666 15.8946 17.521 15.7071 17.7085C15.5196 17.896 15.2652 18.0014 15 18.0014H5C4.73478 18.0014 4.48043 17.896 4.29289 17.7085C4.10536 17.521 4 17.2666 4 17.0014V6.00138H16V17.0014Z"
                      fill="#C7C7C7"
                  />
              </svg>
          </div>
      </div>
  )
}

function App() {
    const [text, setText] = React.useState('')
    const [tasks, setTask] = React.useState([])


    const addToListTasks = (text) => {
        if(text) {
            const newTasks = [...tasks, text]
            setTask(newTasks)
            setText('')
        }
    }

    const removeTask = (task) => {
       const result = tasks.filter((item) => item !== task)
        setTask(result)
        console.log(tasks)
    }
  return (
    <div className="container">
        <Header />
        <TaskInput text={text} setText={setText} addToListTasks={addToListTasks}/>
        {
            tasks.map((task,index) => (
                <Task key={index}  task={task} removeTask={removeTask}/>
            ))
        }

    </div>
  );
}

export default App;
