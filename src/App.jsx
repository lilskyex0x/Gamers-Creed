import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar/Navbar';
import Home from './components/HomePage/Home';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="missions" element={<Missions />} />
        <Route path="my-profile" element={<MyProfile />} /> */}
      </Routes>
    </>
  );
}

export default App;
