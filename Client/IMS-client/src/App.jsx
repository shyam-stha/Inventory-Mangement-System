import react from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Category from "./Container/Category/Categories/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />}>
            <Route path="category" element={<Category />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
