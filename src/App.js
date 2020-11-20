import { Modal } from "react-bootstrap";
import "./App.css";
import MovieList from "./components/MovieList";
import ModalMovie from "./components/ModalMovie";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <MovieList />
      <ModalMovie />
      <Footer />
    </div>
  );
}

export default App;
