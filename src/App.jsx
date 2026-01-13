import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Shell } from "./pages/shell.jsx";
import './App.css'
import NotFound from "./pages/notfound.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Shell />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
