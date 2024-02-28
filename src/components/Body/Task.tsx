import { TbTrash } from 'react-icons/tb';
import styles from './Task.module.css'
import {ITasks} from "../../App.tsx";
import { BsFillCheckCircleFill } from 'react-icons/bs';


interface TaskProps {
    content: ITasks;
    onDelete(id:string): void
    onCompleted(id:string): void
}

export function Task({content, onDelete, onCompleted}:TaskProps){
    return(
        <div className={styles.listItem}>
            <button className={styles.check} onClick={()=>onCompleted(content.id)}>
                {content.isCompleted ? <BsFillCheckCircleFill/> : <div />}
            </button>
            <p>{content.title}</p>
            <button className={styles.trash}
            onClick={()=>onDelete(content.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    );
}