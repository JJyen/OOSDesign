import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import React from "react";

class App extends React.Component {
  sampleDate = {
    plans: [
      {
        title: "20240808 서울여행",
        destinationType: "국내",
        destinationName: "경복궁",
        passportHolders: [
          { id: 1, name: "이민지", hasPassport: "소지" },
          { id: 2, name: "미셸", hasPassport: "소지" }
        ],
        foods: [
          { id: 1, name: "김치찌개", likes: 3, dislikes: 0 },
          { id: 2, name: "칼국수", likes: 2, dislikes: 1 }
        ],
        attractions: [
          { id: 1, name: "국립중앙박물관", likes: 2, dislikes: 0 },
          { id: 2, name: "경복궁", likes: 1, dislikes: 1 }
        ],
        budget: [
          { id: 1, item: "호텔", amount: "1,000,000원" },
          { id: 2, item: "식비", amount: "400,000원" }
        ],
      },
      {
        title: "20240901 일본여행",
        destinationType: "해외",
        destinationName: "일본",
        passportHolders: [
          { id: 1, name: "김나경", hasPassport: "소지" },
          { id: 2, name: "윤은지", hasPassport: "소지" },
          { id: 3, name: "이민지", hasPassport: "미소지" },
          { id: 4, name: "김하경", hasPassport: "미소지" },
          { id: 5, name: "김도현", hasPassport: "소지" },
        ],
        foods: [
          { id: 1, name: "라멘", likes: 3, dislikes: 1 },
          { id: 2, name: "소바", likes: 3, dislikes: 2 },
          { id: 3, name: "덴푸라", likes: 5, dislikes: 0 },
          { id: 4, name: "야키니쿠", likes: 5, dislikes: 0 },
          { id: 5, name: "초밥", likes: 2, dislikes: 3 },
          { id: 6, name: "오코노미야키", likes: 2, dislikes: 0 }
        ],
        attractions: [
          { id: 1, name: "도톤보리", likes: 2, dislikes: 0 },
          { id: 2, name: "청수사", likes: 3, dislikes: 1 },
          { id: 3, name: "유니버설 스튜디오", likes: 4, dislikes: 1 },
          { id: 4, name: "구로몬 시장", likes: 3, dislikes: 1 },
          { id: 5, name: "신세카이", likes: 5, dislikes: 0 },
        ],
        budget: [
          { id: 1, item: "항공", amount: "300,000원" },
          { id: 2, item: "숙박", amount: "300,000원" },
          { id: 3, item: "교통", amount: "150,000원" },
          { id: 4, item: "관광", amount: "170,000원" },
          { id: 5, item: "기념품", amount: "250,000원" },
          { id: 6, item: "식비", amount: "200,000원" },
        ],
      }
    ],

    user: [
      {
        id: "ossd",
        pw: "20240614!",
        email: "test@gmail.com",
        login: false
      }
    ],
  };

  constructor(props) {
    super(props);
    localStorage.setItem("plans", JSON.stringify(this.sampleDate.plans));
    localStorage.setItem("user", JSON.stringify(this.sampleDate.user));
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/finalplanlist" element={<FinalPlanList />} />
            <Route path="/viewfinalplan/:title" element={<ViewFinalPlan />} />
            <Route path="/makeplan/:title" element={<MakePlan />} />
            <Route path="/account" element={<Account />} />
            <Route path="/viewweather" element={<ViewWeather />} />
            <Route path="/viewexchagerate" element={<ViewExchageRate />} />
            <Route path="/viewmap" element={<ViewMap />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
