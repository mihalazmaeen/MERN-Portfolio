
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Loader from "./components/Loader";
function App() {
  const [showLoading, setShowLoading] = useState(false);
  return (
    <BrowserRouter>
    {showLoading ? <Loader/> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
