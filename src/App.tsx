import {
  Navigate,
  Routes,
  Route,
  BrowserRouter as Router,
  useRoutes,
  BrowserRouter,
} from "react-router-dom"
import "./App.css";
import { Home } from "./pages/home";
import { Category } from "./pages/category";
import { Book } from "./pages/singleBook";
import { PageNotFound } from "./pages/NotFound";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
