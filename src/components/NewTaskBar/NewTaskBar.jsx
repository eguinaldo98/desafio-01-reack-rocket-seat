import { PlusCircle } from '@phosphor-icons/react'
import styles from './NewTaskBar.module.css'

export function NewTaskBar({createNewtask}) {
    
    function handleNewtask(){
        event.preventDefault();
        const newTask = {
            id: event.target.nameOfTask.value,
            content: event.target.nameOfTask.value,
            status: false
        };
        createNewtask(newTask)
        event.target.nameOfTask.value = '';
    }
    
    return (
        <form className={styles.newTaskBar} onSubmit={handleNewtask}>
            <textarea placeholder='Adicione uma nova tarefa' name="nameOfTask"></textarea>
            <button type="submit"><a>Criar<PlusCircle/></a></button>
        </form>
    );
}