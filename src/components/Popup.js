import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MAIN } from "../styles/Colors";

class Popup extends React.Component {
  state = {
    inputValue: "" 
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = () => {
    const { inputValue } = this.state;
    const { onAddPlan, onClose } = this.props;

    const newPlan = {
      title: inputValue,
      destinationType: "국내",
      destinationName: "",
      passportHolders: [],
      foods: [],
      attractions: [],
      budget: [],
      totalBudget: "",
    };

    onAddPlan(newPlan);
    onClose();
  };

  render() {
    const { add, onClose } = this.props;
    const { inputValue } = this.state;

    if (!add) return null;

    return (
      <>
        <ModalOverLay />
        <ModalBox>
          <p>계획서의 제목을 적어주세요</p>
          <input
            placeholder="20240808 서울여행"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <div>
            <b className="cancel" onClick={onClose}>취소</b>
            <Link to={`/makeplan/${this.state.inputValue}`}><b className="submit" onClick={this.handleSubmit}>등록</b></Link>
          </div>
        </ModalBox>
      </>
    );
  }
}

export default Popup;

const ModalOverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); 
  z-index: 1000; 
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1001;
  height: 180px;
  border-radius: 8px;

  p {
    margin: 20px 10px 20px 10px;
    text-align: center;
  }

  input {
    width: 270px;
    height: 30px;
    border: 1px solid #b5b3b0;
    background: #e3e3e3;
    border-radius: 5px;
    margin-left: 5px;
  }

  div {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }

  .cancel {
    color: #b5b3b0;
    cursor: pointer;
  }

  .submit {
    color: ${MAIN};
    cursor: pointer;
  }
`;
