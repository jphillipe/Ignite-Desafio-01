import { Task } from "./Task";
import styles from "./Tasks.module.css";
import {ITasks} from "../../App.tsx";
import {TbClipboardText } from "react-icons/tb";

interface Props {
    tasks: ITasks[];
    onDelete(id:string): void
    onCompleted(id:string): void
}


export function Tasks({tasks, onDelete, onCompleted}:Props) {
   

    const numberOfTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length
    return (
        <section className={styles.tasks}>
            
            <header>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{numberOfTasks}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>{completedTasks} de {numberOfTasks}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task key={task.id} content={task} onDelete={onDelete} onCompleted={onCompleted}/>
                ))}

                {tasks.length === 0 &&(
                    <section className={styles.noTasks}>
                        <TbClipboardText size={60} />
                        <div>Você Ainda não possui tarefas</div>
                    </section>
                )}

            </div>
        </section>
    );
}