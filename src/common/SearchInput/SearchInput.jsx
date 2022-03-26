import css from './searchInput.module.sass'

const SearchInput = ({ placeholder, changeCurrentText, addTask, ...props }) => {

    const handleKeyDown = (e) => {
        if (e.code === 'Enter') {
            addTask()
        }
    }

    return (
        <div className={css.wrapper}>
            <label className={css.label}>
                <input
                    type="text"
                    value={props.currentText}
                    onChange={(e) => { changeCurrentText(e.target.value) }}
                    placeholder="&nbsp;"
                    onKeyDown={(e) => { handleKeyDown(e) }}
                />
                <span>{placeholder}</span>
            </label>
        </div>
    )
}

export default SearchInput