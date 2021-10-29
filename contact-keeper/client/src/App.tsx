import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About } from "./pages";
import { ContactState } from "./context";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContactState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </ContactState>
    </div>
  );
}

export default App;
