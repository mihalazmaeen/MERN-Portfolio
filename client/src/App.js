
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Loader from "./components/Loader";
function App() {
  const [showLoading, setShowLoading] = useState(false);

  const getPortfolioData = async () => {

    try{
      const response = await axios.get("/api/portfolio/get-portfolio-data");	
      console.log(response)
    }catch(error){

    }

  }


useEffect(() => {
  getPortfolioData();
}, []);

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
