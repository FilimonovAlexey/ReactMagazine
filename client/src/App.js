import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Homepage } from "./Pages/home-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = { <Homepage /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
