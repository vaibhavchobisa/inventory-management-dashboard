import { Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/navbar.component';
import Home from './routes/home/home.component';
import Details from './routes/details/details.component';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/details/" element={<Details />} />
      </Route>
    </Routes>
  )
}

export default App;
