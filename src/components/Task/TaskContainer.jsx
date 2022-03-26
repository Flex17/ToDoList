import { connect } from 'react-redux'
import Task from './Task'
import { completeTask, deleteTask } from '../../redux/main-reducer'

const mapStateToProps = (state) => {
    return {}
}


export default connect(mapStateToProps, { completeTask, deleteTask })(Task)