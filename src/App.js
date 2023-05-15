import './App.css';
import Home from './pages/home';
import { ThemeProvid } from './contexts/theme.contexts';
import { ThemeTogglerButton } from './componentes/temeTogglerButton';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './pages/card';

function App() {
  return (
    <>
    <ThemeProvid>
      <ThemeTogglerButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/:name' element={<Card />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvid>
    </>
  );
}

export default App;
