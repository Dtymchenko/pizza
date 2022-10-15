import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {

  const [searchInput, setSearchInput] = React.useState('')

  return (
    <div className="App">
      <div className='wrapper'>
        <Header searchInput={searchInput} setSearchInput={setSearchInput}  />
        <Routes>
          <Route path='/' element={<Home searchInput={searchInput}/>}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
