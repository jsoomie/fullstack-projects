import { Home, About, UserDetails, Missing } from "./pages";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GithubState, AlertState } from "./context";
import "./App.css";

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <GithubState>
        <AlertState>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:id" component={UserDetails} />
              <Route exact path="*" component={Missing} />
            </Switch>
          </Router>
        </AlertState>
      </GithubState>
    </div>
  );
};

export default App;
