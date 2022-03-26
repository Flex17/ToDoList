import { Route, Routes } from 'react-router-dom'
import { Categories } from '../Categories/Categories'
import SearchPanel from '../SearchPanel/SearchPanel'
import TasksContainer from '../Tasks/TasksContainer'

const Main = () => {
    return (
        <>
            <SearchPanel
                placeholder={'New task...'}
                btn={'ADD'}
            />
            <Categories />
            <Routes>
                <Route path='*' element={
                    <TasksContainer category='all' />
                } />
                <Route path='/ACTIVE' element={
                    <TasksContainer category='active' />
                } />
                <Route path='/COMPLETED' element={
                    <TasksContainer category='completed' />
                } />
            </Routes>
        </>
    )
}

export default Main