import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="missions" element={<Missions />} />
        <Route path="my-profile" element={<MyProfile />} /> */}
      </Routes>
    </>
  );
}

export default App;
