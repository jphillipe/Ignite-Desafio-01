import { Tasks } from "./components/Body/Tasks"
import { Header } from "./components/Header/Header"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export interface ITasks {
  id: string;
  title: string;
  isCompleted: boolean;
}



function App() {

const [tasks, setTasks] = useState<ITasks[]>([
    
  ]);

function handleAddTask(content:string){
 setTasks(
  [
    ...tasks,
    {
      id: uuidv4(),
      title: content,
      isCompleted: false,  
    }
  ]
 )


}

function toggleCompleted(id:string){
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
       return{
        ...task,
        isCompleted: !task.isCompleted
       }
      }
      return task;
    })
    setTasks(newTasks)
}

function deleteComment(id:string){
  const newTasks = tasks.filter((task)=>task.id!=id);
  setTasks(newTasks);
}


  
  return (
    <>
      <Header onAddTask = {handleAddTask} /> 
      <Tasks tasks={tasks} onDelete = {deleteComment} onCompleted = {toggleCompleted}/>   
    </>
  )
}

export default App
