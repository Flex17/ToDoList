import { connect } from "react-redux"
import { addTask } from "../../redux/main-reducer"
import SearchButton from './SearchButton';

const mapStateToProps = (state) => {
    return {
        isActive: state.tasks.currentText !== ''
    }
}

export default connect(mapStateToProps, { addTask })(SearchButton)