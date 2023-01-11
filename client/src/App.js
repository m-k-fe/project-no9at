import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./pages/Data";
import Form from "./pages/Form";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
