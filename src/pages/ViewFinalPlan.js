import React from "react";
import { BsPassport } from "react-icons/bs";
import { IoIosPin } from "react-icons/io";
import { IoHappyOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class ViewFinalPlan extends React.Component{
    constructor(props) {
        super(props);
        const title = this.props.params.title;
        const plan = this.getPlanFromLocalStorage(title); 

        this.state = {
            title: plan.title,
            destinationType: plan.destinationType,
            destinationName: plan.destinationName,
            passportHolders: plan.passportHolders,
            foods: plan.foods,
            attractions: plan.attractions,
            budget: plan.budget,
            totalBudget: plan.totalBudget,
        };
    }
        
    getPlanFromLocalStorage = (title) => {
        const plans = JSON.parse(localStorage.getItem("plans"));
        return plans.find(plan => plan.title === title);
    };
      
    render(){
        const {destinationType, destinationName, passportHolders, foods, attractions, budget} = this.state; 

        return(
           <ViewFinalPlanContainer>
                <fieldset>
                    <legend>여행지</legend>
                    <FinalPlanInfoBox >
                        <p className="icon tour"><IoIosPin /></p>
                        <p>{destinationType} : {destinationName}</p>
                    </FinalPlanInfoBox>
                </fieldset>
                <fieldset>
                    <legend>여권 소지 여부</legend>
                    {passportHolders.map(holder => (
                        <FinalPlanInfoBox  key={holder.id}>
                            <p className="icon"><BsPassport/></p>
                            <p>{holder.name} : {holder.hasPassport}</p>
                        </FinalPlanInfoBox>
                    ))}
                </fieldset>
                <fieldset>
                    <legend>먹거리</legend>
                    {foods.map(food => (
                        <FinalPlanInfoBox  key={food.id}>
                            <p className="icon"><IoHappyOutline /></p>
                            <p>{food.name}</p>
                        </FinalPlanInfoBox>
                    ))}
                </fieldset>
                <fieldset>
                    <legend>관광지</legend>
                    {attractions.map(attraction => (
                        <FinalPlanInfoBox key={attraction.id} >
                            <p className="icon"><FaRegHeart /></p>
                            <p>{attraction.name}</p>
                        </FinalPlanInfoBox>
                    ))}
                </fieldset>
                <fieldset>
                    <legend>예산</legend>
                    {budget.map(item => (
                        <FinalPlanInfoBox key={item.id}>
                            <p className="icon tour"><TbReportMoney /></p>
                            <p>{item.item} : {item.amount}</p>
                        </FinalPlanInfoBox>
                    ))}
                </fieldset>
                <div className="overay"></div>
           </ViewFinalPlanContainer>
        )
    }
}

export default withParams(ViewFinalPlan);

const ViewFinalPlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin-top: 30px;

    .overay{
        width: 600px;
        padding-top: 100px;
    }

    fieldset{
        width: 400px;
        margin-bottom: 20px;
        border: 2px solid #41315C;
        border-radius: 5px;
        padding-bottom: 15px;
    }

    legend{
        text-align: center;
    }
`;

const FinalPlanInfoBox = styled.div`
    display: flex;
    align-items: center;

    p{
        margin-right: 8px;
        margin-top: 10px;
    }

    .icon{
        color: #41315C;
    }

    .tour{
        font-size: 20px;
    }

`;