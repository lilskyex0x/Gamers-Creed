import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Detail from './pages/DetailPage/Detail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
