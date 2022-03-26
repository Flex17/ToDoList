import css from './searchButton.module.sass'

const SearchButton = ({ btn, addTask, ...props }) => {
    return (
        <button
            className={css.btn}
            onClick={() => { addTask() }}
        >
            {btn}
        </button>
    )
}

export default SearchButton