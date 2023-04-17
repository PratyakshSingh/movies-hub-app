import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import TvShows from "./Pages/TvShows/TvShows";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvShows" element={<TvShows />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
