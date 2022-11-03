import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { useSelector, useDispatch } from "react-redux";

export const SearchContext = React.createContext("");

function App() {
  const [input, setInput] = React.useState("");
  const [searchInput, setSearchInput] = React.useState("");

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider
          value={{ input, setInput, searchInput, setSearchInput }}
        >
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                // searchInput={searchInput}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
