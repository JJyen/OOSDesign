import React from "react";
import PlanListItem from "../components/PlanListItem";
import styled from "styled-components";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { GRAY20 } from "../styles/Colors";
import Popup from "../components/Popup";

class Home extends React.Component {
  state = {
    clickCreatBtn: false,
    plans: JSON.parse(localStorage.getItem("plans")) || []
  };

  handlePopupClose = () => {
    this.setState({ clickCreatBtn: false });
  };

  handleAddPlan = (newPlan) => {
    const updatedPlans = [...this.state.plans, newPlan];
    this.setState({ plans: updatedPlans });
    localStorage.setItem("plans", JSON.stringify(updatedPlans));
  };

  handleDeletePlan = (title) => {
    if (window.confirm(`'${title}' 계획을 삭제하시겠습니까?`)) {
        const updatedPlans = this.state.plans.filter(plan => plan.title !== title);
        this.setState({ plans: updatedPlans });
        localStorage.setItem("plans", JSON.stringify(updatedPlans));
    }
  };

  handleUpdatePlan = (updatedPlan) => {
    const updatedPlans = this.state.plans.map(plan =>
      plan.title === updatedPlan.title ? updatedPlan : plan
    );
    this.setState({ plans: updatedPlans });
    localStorage.setItem("plans", JSON.stringify(updatedPlans));
  };

  render() {
    const { clickCreatBtn, plans } = this.state;

    return (
      <MainContainer>
        <div className="plan-create" onClick={() => this.setState({ clickCreatBtn: true })}>
          <p>계획 추가하기</p>
          <p><HiMiniPencilSquare /></p>
        </div>
        {clickCreatBtn && <Popup add={clickCreatBtn} onClose={this.handlePopupClose} onAddPlan={this.handleAddPlan} />}
        <hr />
        {plans.map((plan, index) => (
            <PlanListItem title={plan.title}  onDelete={this.handleDeletePlan} key={index} />
        ))}
      </MainContainer>
    );
  }
}

export default Home;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column; 
  background-color: white;
  padding-bottom: 90px;

  hr {
    width: 500px;
    border: 1px solid ${GRAY20};
    margin: 20px 0px;
  }

  .plan-create {
    width: 500px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 3px solid #B3A3BA;
    border-radius: 10px;
    padding: 0px 10px;
    margin-top: 30px;
    font-weight: bold;

    &:hover {
      background-color: #B3A3BA;
      color: white;
    }
  }
`;
