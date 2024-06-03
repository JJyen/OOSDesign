import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signin from "./pages/Signin";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}></Route>
        <Route path="/" element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;