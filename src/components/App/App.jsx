import Header from '../Header/Header';
import Main from '../Main/Main';
import useTheme from './../../common/useTheme';

function App() {
	const { theme, setTheme } = useTheme()

	return (
		<div className='container'>
			<Header title={'To Do App'} theme={theme} setTheme={setTheme} />
			<Main />
		</div>
	);
}

export default App;
