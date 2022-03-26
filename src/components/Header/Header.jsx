import css from './header.module.sass'

const Header = ({ title }) => {
    return (
        <header className={css.wrapper}>
            <h1 className={css.title}>{title}</h1>
        </header>
    )
}

export default Header