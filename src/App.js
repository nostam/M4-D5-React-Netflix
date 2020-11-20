import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import ModalMovie from "./components/ModalMovie";
import Footer from "./components/Footer";
import NavBar from './components/NavBar';
import Cards from './components/Cards'
    
function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieList />
      <ModalMovie />
      <Cards />
      <Footer />
    </div>

  );
}

export default App;
