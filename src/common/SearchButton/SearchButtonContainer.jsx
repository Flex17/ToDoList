import { connect } from "react-redux"
import { addTask } from "../../redux/main-reducer"
import SearchButton from './SearchButton';

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, { addTask })(SearchButton)