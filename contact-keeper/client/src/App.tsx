import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About } from "./pages";
import { ContactState, AuthState } from "./context";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthState>
        <ContactState>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Router>
        </ContactState>
      </AuthState>
    </div>
  );
}

export default App;
