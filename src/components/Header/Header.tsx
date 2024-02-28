import { ChangeEvent, FormEvent, useState } from "react";
import logo from "../../assets/Logo.svg";
import styles from "./Header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";


interface HeaderProps {
    onAddTask: (taskContent:string) => void;
}


export function Header({onAddTask}:HeaderProps){

    const [content, setContent] = useState("")

    function handleSubmit(event:FormEvent){
        event.preventDefault();
        onAddTask(content)
        setContent("");
    }

    function onChangeContent(event:ChangeEvent<HTMLInputElement>){
        setContent(event.target.value);
    }


    return(
        <header className={styles.header}>
            <img src={logo} alt="" />
            
            <form className={styles.newTask} onSubmit={handleSubmit}>
                <input placeholder="Adicione uma nova tarefa"
                onChange={onChangeContent} 
                value={content}/>
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>

        </header>
    )
}