
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect} from "react";
import axios from "axios";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Loader from "./components/Loader";
import { useDispatch } from "react-redux";
import { SetPortfolioData, ShowLoading, HideLoading } from "./redux/rootSlice";
import { useSelector } from "react-redux";
function App() {
  const {loading, portfolioData} = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  },[portfolioData]);



  return (
    <BrowserRouter>
    {loading ? <Loader/> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
