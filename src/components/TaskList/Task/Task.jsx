import { Trash } from '@phosphor-icons/react';

import styles from './Task.module.css';
import { useState } from 'react';

export function Task({ id, content, status, changeStatus, deleteComment}) {
    const [isChecked, setIsChecked] = useState(status)

    function handleChangeStatus() {
        const updatedStatus = !isChecked;
        setIsChecked(updatedStatus);
        changeStatus(updatedStatus, id);
    }

    function handleDeletComment() {
        event.preventDefault();
        deleteComment(id);
    }

    return (
        <div key={id} className={styles.task}>
            <div className={styles.container} >
                <div className={styles.checkBox}>
                    <input
                        id={id}
                        type="checkbox"
                        onChange={handleChangeStatus}
                        checked={isChecked}
                    />
                    <label htmlFor={id}></label>
                </div>
                <div className={styles.taskContent}>
                    <span>{content}</span>
                </div>
            </div>
            <a className={styles.trash} onClick={handleDeletComment}><Trash size={22} /></a>
        </div>
    );
}