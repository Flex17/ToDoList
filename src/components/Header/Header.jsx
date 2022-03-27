import css from './header.module.sass'

import { IoMoon } from 'react-icons/io5';

const Header = ({ title, theme, setTheme }) => {

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <header className={css.wrapper}>
            <h1 className={css.title}>{title}</h1>
            <div
                className={css.switcher}
                onClick={toggleTheme}
            >
                {
                    theme === 'light' ? <IoMoon size={'15px'} color={'black'} /> : <IoMoon size={'15px'} color={'white'} />
                }
                <span>
                    {theme === 'light' ? 'Dark' : 'Light'} Theme
                </span>
            </div>
        </header>
    )
}

export default Header