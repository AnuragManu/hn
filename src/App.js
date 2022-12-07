import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Newstoriesscreen from './pages/Newstoriesscreen';
import Pagenation from './components/Pagenation';

function App() {
  return (
    <Router>
      <Navbar/>
      <Pagenation/>
      <Routes>
        <Route path="/" element={<Newstoriesscreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
