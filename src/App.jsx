import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/base/base.css";
import Dashboard from './components/Dashboard/Dashboard';
import Main from './components/Main/Main';

function App() {
	return (
		<div className="wrapper">
			<Dashboard />
            <Main />
		</div>
	);
}

export default App;
