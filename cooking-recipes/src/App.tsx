import { HomePage, CreatePage, RecipePage, SearchPage, ErrorPage } from "pages";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
