import { NavLink } from 'react-router-dom'
import css from './category.module.sass'

function Category({ text, link }) {
    return (
        <div className={css.wrapper}>
            <NavLink
                className={(navData) => navData.isActive ? css.active : css.link}
                to={link}
            >{text}
            </NavLink>
        </div>
    )
}

export default Category