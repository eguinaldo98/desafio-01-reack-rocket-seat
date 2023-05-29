import { Task } from './Task/Task';
import { useState } from 'react';
import { NewTaskBar } from '../NewTaskBar/NewTaskBar';
import Clipboard from '../../assets/Clipboard.svg'
import styles from './TaskList.module.css';


export function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [countAllTasks, setCountAllTasks] = useState(tasks.length)
    const [countCompletedTasks, setcountCompletedTasks] = useState(updateCompletedTasks(tasks))

    function updateTaskStats(newStatus, id) {
        const updateTaskStatus = tasks.map(task => {
            if (task.id == id)
                task.status = newStatus;

            return task;
        });
        setcountCompletedTasks(updateCompletedTasks(updateTaskStatus));
        setTasks(updateTaskStatus);
    }

    function updateCompletedTasks(list) {
        const count = list.filter(task => task.status == true)
        return count.length;
    }

    function createNewtask(newTask) {
        const notRepeatElement = tasks.filter(task => task.id == newTask.id);

        if (newTask.content != '' && notRepeatElement.length == 0) {
            const totalTasks = tasks.length + 1;
            setTasks([...tasks, newTask])
            setCountAllTasks(totalTasks);
        }
    }

    function deleteComment(id) {
        const totalTasks = tasks.length - 1;
        const listWithoutComment = tasks.filter(task => task.id != id);
        setTasks(listWithoutComment)
        setCountAllTasks(totalTasks)
        setcountCompletedTasks(updateCompletedTasks(listWithoutComment))
    }

    return (
        <>
            <NewTaskBar
                createNewtask={createNewtask}
            />
            <div className={styles.taskList}>

                <header>
                    <span>Tarefas criadas <p>{countAllTasks}</p> </span>
                    <span className={styles.purple}> Concluidas <p>{countCompletedTasks} de {countAllTasks}</p></span>
                </header>
                <div>
                    {tasks.length == 0
                        ? <div className={styles.withoutTasks}>
                             <img src={Clipboard} className={styles.rocket} alt="clipboard"/>
                             <b>Você ainda não tem tarefas cadastradas</b>
                             <p>Crie tarefas e organize seus itens a fazer</p>
                          </div>
                        : tasks.map(tasks => {
                            return (
                                <Task
                                    key={tasks.id}
                                    id={tasks.id}
                                    content={tasks.content}
                                    status={tasks.status}
                                    changeStatus={updateTaskStats}
                                    deleteComment={deleteComment}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}
