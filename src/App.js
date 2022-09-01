
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Info from './components/Info'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <>
        <Header/> 
        <Home/> 
        </>
        }></Route>
        <Route path="/info" element={
        <>
        <Header/> 
        <Info/> 
        </>
        }></Route>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
