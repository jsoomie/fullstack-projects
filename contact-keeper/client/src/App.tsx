import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
