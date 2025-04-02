import './Css/App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./pages/home";
import Favorite from './pages/favourites';
import { MovieProvider } from './context/MovieContext';


function App() {
  return (
    <MovieProvider>
    <div>  
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorite />} />
        </Routes>
      </main>
    </div> 
    </MovieProvider>
  );
}

export default App;
