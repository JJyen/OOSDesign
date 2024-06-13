import React from "react";
import styled from "styled-components";
import { MAIN } from "../styles/Colors";
import { useNavigate } from "react-router-dom";

function withNavigation(Component) {
    return props => <Component {...props} navigate={useNavigate()} />;
}

class Account extends React.Component{
    constructor(props) {
        super(props);
        const users = JSON.parse(localStorage.getItem("user"));

        this.state = {
            users: users,
        };
    }

    onSubmit = () => {
        const {users} = this.state;
        users[0].login = false;
        localStorage.setItem('user', JSON.stringify(users));
        alert(`로그아웃 되었습니다. 다시 로그인해 주세요`);
        this.props.navigate('/signin')
    }

    render(){
        return(
            <AccountContainer className="user">
                <button onClick={()=>this.onSubmit()}>로그아웃</button>
            </AccountContainer>
        )
    }
}

export default withNavigation(Account);

const AccountContainer = styled.div`
    text-align: center;
    margin-top: 40%;

    button{
        margin-top: 15px;
        width: 180px;
        height: 40px;
        border: none;
        background-color: ${MAIN};
        border-radius: 10px;

        &:hover{
            cursor: pointer;
            background-color: #B3A3BA;
        }
    }
`;