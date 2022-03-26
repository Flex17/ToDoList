import SearchButtonContainer from '../../common/SearchButton/SearchButtonContainer'
import SearchInputContainer from '../../common/SearchInput/SearchInputContainer'

import css from './searchPanel.module.sass'

const SearchPanel = ({ placeholder, btn }) => {
    return (
        <div className={css.panel}>
            <SearchInputContainer placeholder={placeholder} />
            <SearchButtonContainer btn={btn} />
        </div>
    )
}

export default SearchPanel