import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Login, Register } from "pages";
import { ContactState, AuthState, AlertState } from "context";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthState>
        <ContactState>
          <AlertState>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </Router>
          </AlertState>
        </ContactState>
      </AuthState>
    </div>
  );
}

export default App;
