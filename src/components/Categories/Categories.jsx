import Category from '../Category/Category'
import css from './categories.module.sass'

export const Categories = () => {
    return (
        <div className={css.wrapper}>
            <Category text={'ALL'} link='' />
            <Category text={'ACTIVE'} link='/ACTIVE' />
            <Category text={'COMPLETED'} link='/COMPLETED' />
        </div>
    )
}
