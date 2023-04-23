import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Homepage } from "./Pages/home-page";
import { paths } from "./paths";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element = { <Homepage /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
