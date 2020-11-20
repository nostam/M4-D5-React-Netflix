import { Modal } from 'react-bootstrap';
import './App.css';
import MovieList from './components/MovieList'
import ModalMovie from './components/ModalMovie'

function App() {
  return (
    <div className="App">
      <MovieList />
      <ModalMovie/>
    </div>
  );
}

export default App;
