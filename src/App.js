import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Navbar from './components/Navbar';
import Profile from './components/pages/Profile/Profile';
import Form from './components/pages/Form';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </Route>
          <Route path="/sign-up">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


