import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { GRAY20,GRAY30, MAIN } from "../styles/Colors";

function withNavigation(Component) {
    return props => <Component {...props} navigate={useNavigate()} />;
}

class Signin extends React.Component{
    constructor(props) {
        super(props);
        const users = JSON.parse(localStorage.getItem("user"));

        this.state = {
            users: users,
            inputId: '',
            inputPW: '',
        };
    }

    onSubmit = (e,id, pw) => {
        const {users} = this.state;
        const user = users.find(u => u.id === id && u.pw === pw);
        if(user){
            user.login = true;
            localStorage.setItem('user', JSON.stringify(users));
            alert(`${user.id}님 환영합니다.`);
            this.props.navigate('/')
        }else{
            alert(`회원정보를 찾을 수 없습니다.`);
            e.preventDefault();
        }
    }
        
    render(){
        const {inputId, inputPW} = this.state;
        return(
            <SigninContainer>
            <Link to={"/"}><h1>트리뷰</h1></Link>
            <form>
                <label htmlFor="id">아이디</label>
                <input 
                    type="text" 
                    id="id" 
                    autoComplete="id" 
                    placeholder="아이디를 입력해주세요." 
                    value={inputId}
                    onChange={(e)=> this.setState({inputId: e.target.value })} 
                />
                <label htmlFor="current-password">비밀번호</label>
                <input 
                    type="password"  
                    id="current-password" 
                    autoComplete="pw" 
                    placeholder="비밀번호를 입력해주세요."
                    value={inputPW}
                    onChange={(e)=> this.setState({inputPW: e.target.value })} 
                />
                <input className="submit-btn" type="submit" value={"로그인"} onClick={(e)=>this.onSubmit(e,inputId, inputPW)}/>
            </form>
            <SignupLink to={"/signup"}>회원가입</SignupLink>
            </SigninContainer>
        )
    }
}

export default withNavigation(Signin);

const SigninContainer = styled.div`
    background-color: white;
    height: 100vh;

    label{
        margin-bottom: 5px;
    }
    
    h1{
        text-align: center;
        padding-top: 20px;
        margin-bottom: 130px;
    }

    form{
        max-width: 500px;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 15px;
        font-weight: bold;
        color: ${GRAY30};
    }

    input{
        display: inline-block;
        height: 60px;
        border: 2px solid ${GRAY20};
        padding-left: 15px;
        border-radius: 7px;
        margin-bottom: 20px;
        font-size: 15px;
    }

    .submit-btn{
        margin-top: 10px;
        margin-bottom: 10px;
        padding-left: 0px;
        border-radius: 20px;
        height: 55px;
        border: none;
        font-weight: bold;
        color: ${GRAY30};

        &:hover{
            cursor: pointer;
            background-color: ${MAIN};
            color: white;
        }
    }
`;

const SignupLink = styled(Link)`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
    color: ${GRAY30};

    &:hover{
            cursor: pointer;
            color: ${MAIN};
    }

` 