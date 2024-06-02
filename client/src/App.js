
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect} from "react";
import axios from "axios";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import { useDispatch } from "react-redux";
import { SetPortfolioData } from "./redux/rootSlice";
import { useSelector } from "react-redux";
function App() {
  const {loading, portfolioData} = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
    } catch (error) {
      console.error("Error fetching portfolio data", error);
    }
  };

  useEffect(() => {
      getPortfolioData();
  }, []);



  return (
    <BrowserRouter>
    {loading ? <Loader/> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
