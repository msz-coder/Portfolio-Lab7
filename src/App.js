import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import NotFound from "./components/404/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
