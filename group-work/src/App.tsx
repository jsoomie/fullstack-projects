import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, Create, Signup, Project } from "pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
