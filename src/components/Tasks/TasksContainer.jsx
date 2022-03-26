import { connect } from 'react-redux'
import Tasks from './Tasks'


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks
    }
}

export default connect(mapStateToProps, {})(Tasks)