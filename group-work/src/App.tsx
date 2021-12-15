import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, Create, Signup, Project, Error } from "pages";
import { Navbar } from "components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
