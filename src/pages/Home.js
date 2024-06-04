import React from "react";
import PlanListItem from "../components/PlanListItem";
import styled from "styled-components";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { GRAY20 } from "../styles/Colors";

class Home extends React.Component{
    render(){
        return(
            <MainContainer>
                <div className="plan-create">
                    <p>계획 추가하기</p>
                    <p><HiMiniPencilSquare/></p>
                </div><hr/>
                <PlanListItem/>
                <PlanListItem/>
                <PlanListItem/>
                <PlanListItem/>
                <PlanListItem/>
                <PlanListItem/>
                <PlanListItem/>
                <PlanListItem/>
                <PlanListItem/>
                <PlanListItem/>
                <PlanListItem/>
                <PlanListItem/>
            </MainContainer>
        )
    }
}

export default Home;

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column; 
    background-color: white;
    padding-bottom: 90px;

    hr{
        width: 500px;
        border: 1px solid ${GRAY20};
        margin: 20px 0px;
    }

    .plan-create{
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

        &:hover{
            background-color: #B3A3BA;
            color: white;
        }
    }

`;