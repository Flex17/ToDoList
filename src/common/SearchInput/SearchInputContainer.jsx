import { connect } from "react-redux"
import { changeCurrentText, addTask } from './../../redux/main-reducer';
import SearchInput from "./SearchInput";

const mapStateToProps = (state) => {
    return {
        currentText: state.tasks.currentText
    }
}

export default connect(mapStateToProps, { changeCurrentText, addTask })(SearchInput)