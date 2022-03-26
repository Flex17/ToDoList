import TaskContainer from '../Task/TaskContainer'
import css from './tasks.module.sass'

const Tasks = ({ tasks, category }) => {

    let elements

    switch (category) {
        case 'all':
            elements = tasks.map(task => {
                return task
            })
            break;

        case 'active':
            elements = tasks.filter(task => {
                return task.isCompleted === false
            })
            break

        case 'completed':
            elements = tasks.filter(task => {
                return task.isCompleted === true
            })
            break

        default:
            break;
    }


    return (
        <div className={css.wrapper}>
            {
                elements.map(task => {
                    return (
                        <TaskContainer
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            isCompleted={task.isCompleted}
                        />
                    )
                })
            }
        </div>
    )
}


export default Tasks
