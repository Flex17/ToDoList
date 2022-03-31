import css from './searchButton.module.sass'

const SearchButton = ({ btn, addTask, isActive, ...props }) => {
    return (
        <button
            className={isActive ? css.btnActive : css.btnDisabled}
            onClick={() => { isActive ? addTask() : console.log() }}
        >
            {btn}
        </button>
    )
}

export default SearchButton