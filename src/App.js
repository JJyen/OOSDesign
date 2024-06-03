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
          <Route Home path="/" element={<Home/>}/>
          <Route FinalPlanList path="/finalplanlist" element={<FinalPlanList/>}/>
          <Route ViewFinalPlan path="/viewfinalplan" element={<ViewFinalPlan/>}/>
          <Route MakePlan path="/makeplan" element={<MakePlan/>}/>
          <Route MakePlan path="/account" element={<Account/>}/>
          <Route MakePlan path="/viewweather" element={<ViewWeather/>}/>
          <Route MakePlan path="/viewexchagerate" element={<ViewExchageRate/>}/>
          <Route MakePlan path="/viewmap" element={<ViewMap/>}/>
        </Route>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;