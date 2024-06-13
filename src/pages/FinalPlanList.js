import React from "react";
import FinalPlanListItem from "../components/FinalPlanListItem";
import styled from "styled-components";

class FinalPlanList extends React.Component{
    state = {
        plans: JSON.parse(localStorage.getItem("plans")) || []
      };

    render(){
        const {plans} = this.state;

        return(
            <FinalPlanListContainer>
                {plans.map((plan, index) => (
                    <FinalPlanListItem title={plan.title} key={index} />
                ))}
            </FinalPlanListContainer>
        )
    }
}

export default FinalPlanList;

const FinalPlanListContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column; 
    background-color: white;
    margin-top: 30px;
    padding-bottom: 90px;

    div{
        height: 55px;
        margin-bottom: 20px;
        border-radius: 20px;
        border: 3px solid #41315C;
    }
`;