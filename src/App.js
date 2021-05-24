import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar'
import Ueber from './components/Ueber/Ueber'
import Address from './components/Address/Address';
import Education from './components/Education/Education'
import Workexperience from './components/Workexperience/Workexperience'
import ContactMe from './components/ContactMe/ContactMe'
import Jobs from './components/Jobs/Jobs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/contactme" render={ContactMe}>
          </Route>
          <Route path="/address" render={Address}>
          </Route>
          <Route path="/education" render={Education}>
          </Route>
          <Route path="/workexperience" render={Workexperience}>
          </Route>
          <Route path="/jobs" render={Jobs}>
          </Route>
          <Route exact path="/" component={Ueber} />
        </Switch>

      </div >

    </Router >

  );
}

export default App;
