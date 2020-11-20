import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import ModalMovie from "./components/ModalMovie";
import Footer from "./components/Footer";
import NavBar from './components/NavBar';
    
function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieList />
      <ModalMovie />
      <Footer />
    </div>

  );
}

export default App;
