import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signin from "./pages/Signin";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import FinalPlanList from "./pages/FinalPlanList";
import ViewFinalPlan from "./pages/ViewFinalPlan";
import MakePlan from "./pages/MakePlan";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ViewWeather from "./pages/ViewWeather";
import ViewExchageRate from "./pages/ViewExchageRate";
import ViewMap from "./pages/ViewMap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/finalplanlist" element={<FinalPlanList/>}/>
          <Route path="/viewfinalplan" element={<ViewFinalPlan/>}/>
          <Route path="/makeplan" element={<MakePlan/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/viewweather" element={<ViewWeather/>}/>
          <Route path="/viewexchagerate" element={<ViewExchageRate/>}/>
          <Route path="/viewmap" element={<ViewMap/>}/>
        </Route>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;