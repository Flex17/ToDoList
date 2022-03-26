import { FiTrash2 } from 'react-icons/fi'

import css from './task.module.sass'

const Task = ({ id, text, isCompleted, ...props }) => {

    return (
        <div className={css.wrapper}>
            <div className={css.item} key={id}>
                <input
                    id={id}
                    className={css.input}
                    type="checkbox"
                    onClick={() => { props.completeTask(id) }}
                    defaultChecked={`${isCompleted ? true : ''}`}
                />
                <label htmlFor={id}></label>
                <span className={`${isCompleted ? css.completed : css.text}`}>
                    {text}
                </span>
            </div>
            <div className={css.trash} onClick={() => { props.deleteTask(id) }}>
                <FiTrash2 size={'20px'} />
            </div>
        </div>
    )
}

export default Task