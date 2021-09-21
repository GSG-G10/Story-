import "./App.css";
import Home from "./Components/Home";
import Welcome from "./Components/Welcome";
import Characters from "./Components/Characters";
import Story from "./Components/Story";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/characters">
            <Characters />
          </Route>
          <Route exact path="/story">
            <Story />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
