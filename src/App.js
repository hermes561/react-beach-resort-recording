//import logo from './logo.svg';
import './App.css';
import Navbarn from './components/Navbarn';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { Switch, Route} from "react-router-dom";


function App() {
	//switch component is for error page
    return (
	    <>
		    <Navbarn />
		    <Switch>
			    <Route exact path="/" component={Home} />
				<Route exact path="/rooms/" component={Rooms} />
				<Route exact path="/rooms/:slug" component={SingleRoom} />
				<Route component={Error} />
			</Switch>
			
	    </>
    );
}

export default App;
