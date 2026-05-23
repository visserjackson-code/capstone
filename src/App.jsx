import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Landing from './pages/Landing';
import Tracker from './pages/Tracker';
import Nuzlocke from './pages/Nuzlocke';



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="nuzlocke" element={<Nuzlocke />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
