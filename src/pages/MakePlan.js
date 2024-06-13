import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GRAY30, MAIN } from "../styles/Colors";

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class MakePlan extends React.Component {
  constructor(props) {
    super(props);
    const title = this.props.params.title; 
    const plan = this.getPlanFromLocalStorage(title); 

    this.state = {
      title: plan.title || "",
      destinationType: plan.destinationType || "국내",
      destinationName: plan.destinationName || "",
      passportHolders: plan.passportHolders || [],
      foods: plan.foods || [],
      attractions: plan.attractions || [],
      budget: plan.budget || [],
      totalBudget: plan.totalBudget || "",
    };
  }
  
  getPlanFromLocalStorage = (title) => {
    const plans = JSON.parse(localStorage.getItem("plans")) || [];
    return plans.find(plan => plan.title === title) || {};
  };
    

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    },this.handleSave);
  };

  handlePassportChange = (e, id) => {
    const { value } = e.target;
    this.setState(prevState => ({
      passportHolders: prevState.passportHolders.map(holder =>
        holder.id === id ? { ...holder, hasPassport: value } : holder
      )
    }),this.handleSave);
  };

  handlePassportNameChange = (e, id) => {
    const { value } = e.target;
    this.setState(prevState => ({
      passportHolders: prevState.passportHolders.map(holder =>
        holder.id === id ? { ...holder, name: value } : holder
      )
    }),this.handleSave);
  };

  handleFoodChange = (e, id) => {
    const { value } = e.target;
    this.setState(prevState => ({
      foods: prevState.foods.map(food =>
        food.id === id ? { ...food, name: value } : food
      )
    }),this.handleSave);
  };

  handleAttractionChange = (e, id) => {
    const { value } = e.target;
    this.setState(prevState => ({
      attractions: prevState.attractions.map(attraction =>
        attraction.id === id ? { ...attraction, name: value } : attraction
      )
    }),this.handleSave);
  };

  handleBudgetChange = (e, id, key) => {
    const { value } = e.target;
    this.setState(prevState => ({
      budget: prevState.budget.map(item =>
        item.id === id ? { ...item, [key]: value } : item
      )
    }),this.handleSave);
  };

  addNewHolder = () => {
    this.setState(prevState => ({
      passportHolders: [...prevState.passportHolders, {
        id: prevState.passportHolders.length + 1,
        name: "",
        hasPassport: "소지",
      }]
    }),this.handleSave);
  };

  addNewFood = () => {
    this.setState(prevState => ({
      foods: [...prevState.foods, {
        id: prevState.foods.length + 1,
        name: "",
        likes: 0,
        dislikes: 0,
      }]
    }),this.handleSave);
  };

  addNewAttraction = () => {
    this.setState(prevState => ({
      attractions: [...prevState.attractions, {
        id: prevState.attractions.length + 1,
        name: "",
        likes: 0,
        dislikes: 0,
      }]
    }),this.handleSave);
  };

  addNewBudget = () => {
    this.setState(prevState => ({
      budget: [...prevState.budget, {
        id: prevState.budget.length + 1,
        item: "",
        amount: 0 
      }]
    }),this.handleSave);
  };

  handleFoodLikeNum = (id, isLike) => {
    this.setState(prevState => ({
      foods: prevState.foods.map(food =>
        food.id === id ? 
        { ...food, likes: isLike ? food.likes + 1 : food.likes, 
          dislikes: !isLike ? food.dislikes + 1 : food.dislikes 
        } : food
      )
    }),this.handleSave);
  };

  handleAttractionLikeNum = (id, isLike) => {
    this.setState(prevState => ({
      attractions: prevState.attractions.map(attraction =>
        attraction.id === id ? 
        { ...attraction, likes: isLike ? attraction.likes + 1 : attraction.likes, 
          dislikes: !isLike ? attraction.dislikes + 1 : attraction.dislikes 
        } : attraction
      )
    }),this.handleSave);
  };

  handleSave = () => {
    const { title, destinationType, destinationName, passportHolders, foods, attractions, budget, totalBudget } = this.state;
    const updatedPlan = { title, destinationType, destinationName, passportHolders, foods, attractions, budget, totalBudget };
    
    const plans = JSON.parse(localStorage.getItem("plans")) || [];
    
    const updatedPlans = plans.filter(plan => plan.title !== title);
    updatedPlans.push(updatedPlan);
  
    localStorage.setItem("plans", JSON.stringify(updatedPlans));
  };

  render() {
    const {destinationType, destinationName, passportHolders, foods, attractions, budget} = this.state; 

    return (
      <MakePlanContainer>
        <fieldset>
          <legend>여행지</legend>
          <div>
            <label>국내
              <input
                type="radio"
                name="destinationType"
                value="국내"
                checked={destinationType === "국내"}
                onChange={this.handleInputChange}/>
            </label>
            <label>해외
              <input
                type="radio"
                name="destinationType"
                value="해외"
                checked={destinationType === "해외"}
                onChange={this.handleInputChange}/>
            </label>
          </div>
          <label htmlFor="travel-des">여행지:
            <InputDestination
              id="travel-des"
              name="destinationName"
              placeholder="여행지를 적어주세요."
              type="text"
              value={destinationName}
              onChange={this.handleInputChange}/>
          </label>
        </fieldset>
        <fieldset>
          <legend>여권 소지 여부</legend>
          {passportHolders.map(holder => (
            <div key={holder.id}>
              <InputHasPassport
                placeholder="이름을 적어주세요."
                type="text"
                value={holder.name}
                onChange={(e) => this.handlePassportNameChange(e, holder.id)} />
                <label htmlFor={`passport-${holder.id}-yes`}>소지
                <input
                  id={`passport-${holder.id}-yes`}
                  type="radio"
                  name={`passport-${holder.id}`}
                  value="소지"
                  checked={holder.hasPassport === "소지"}
                  onChange={(e) => this.handlePassportChange(e, holder.id)}/>
              </label>
              <label htmlFor={`passport-${holder.id}-no`}>미소지
                <input
                  id={`passport-${holder.id}-no`}
                  type="radio"
                  name={`passport-${holder.id}`}
                  value="미소지"
                  checked={holder.hasPassport === "미소지"}
                  onChange={(e) => this.handlePassportChange(e, holder.id)}/>
              </label>
            </div>
          ))}
          <button className="add-item-btn" onClick={this.addNewHolder}>+명단 추가하기</button>
        </fieldset>
        <fieldset>
          <legend>먹거리</legend>
          {foods.map(food => (
            <div key={food.id}>
              <input type="checkbox" />
              <InputFood
                placeholder="먹고 싶어요!"
                type="text"
                value={food.name}
                onChange={(e) => this.handleFoodChange(e, food.id)}/>
              <button className="dis-like-btn" onClick={() => this.handleFoodLikeNum(food.id, true)}>좋아요 ({food.likes})</button>
              <button className="dis-like-btn" onClick={() => this.handleFoodLikeNum(food.id, false)}>싫어요 ({food.dislikes})</button>
            </div>
          ))}
          <button className="add-item-btn" onClick={this.addNewFood}>목록 추가하기</button>
        </fieldset>
        <fieldset>
          <legend>관광지</legend>
          {attractions.map(attraction => (
            <div key={attraction.id}>
              <input type="checkbox"/>
              <InputAttraction
                placeholder="가고 싶어요!"
                type="text"
                value={attraction.name}
                onChange={(e) => this.handleAttractionChange(e, attraction.id)}/>
              <button className="dis-like-btn" onClick={() => this.handleAttractionLikeNum(attraction.id, true)}>좋아요 ({attraction.likes})</button>
              <button className="dis-like-btn" onClick={() => this.handleAttractionLikeNum(attraction.id, false)}>싫어요 ({attraction.dislikes})</button>
            </div>
          ))}
          <button className="add-item-btn" onClick={this.addNewAttraction}>목록 추가하기</button>
        </fieldset>
        <fieldset>
          <legend>예산</legend>
          {budget.map(budgetItem => (
            <div key={budgetItem.id}>
              <input type="checkbox" />
              <InputBudgetList
                placeholder="예산 목록"
                type="text"
                value={budgetItem.item}
                onChange={(e) => this.handleBudgetChange(e, budgetItem.id, "item")}/>
              : 
              <InputBudget
                placeholder="예산을 적어주세요."
                type="text"
                value={budgetItem.amount}
                onChange={(e) => this.handleBudgetChange(e, budgetItem.id, "amount")}/>
            </div>
          ))}
          <button  className="add-item-btn" onClick={this.addNewBudget}>목록 추가하기</button>
        </fieldset>
        <div className="overay"></div>
      </MakePlanContainer>
    );
  }
}

export default withParams(MakePlan);

const MakePlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;

    .overay{
        width: 600px;
        padding-top: 100px;
    }

    fieldset{
        margin-top: 20px;
        width: 550px;
        padding: 10px;
        border: 2px solid ${MAIN};
        border-radius: 5px;
        background-color: white;
    }

    input{
        border: none;
        border-bottom: 1px solid ${GRAY30};
        margin-top: 15px;
        outline: none;
    }

    input[type=radio]{
        margin-right: 15px;
        cursor: pointer;
    }

    .add-item-btn{
        margin-top: 15px;
        border: 2px solid #B3A3BA;
        background-color: #B3A3BA;
        height: 30px;
        border-radius: 5px;

        &:hover{
            cursor: pointer;
            color: white;
        }
    }

    .dis-like-btn{
        margin-top: 15px;
        border: 2px solid #B3A3BA;
        background-color: white;
        height: 25px;
        border-radius: 5px;
        margin-right: 5px;

        &:hover{
            cursor: pointer;
            background-color: #B3A3BA;
        }
    }
`;

const InputDestination = styled.input`
    margin-left: 5px;
    margin-top: 15px;
`;

const InputHasPassport = styled.input`
    width: 115px;
    margin-right: 15px;
`;

const InputFood = styled.input`
    width: 130px;
    margin-right: 15px;
`;

const InputAttraction = styled.input`
    width: 150px;
    margin-right: 15px;
`;

const InputBudgetList = styled.input`
    width: 90px;
    margin-right: 5px;
`;

const InputBudget = styled.input`
    width: 150px;
    margin-left: 5px;
`;