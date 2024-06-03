import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { GRAY20,GRAY30, MAIN } from "../styles/Colors";

class Signin extends React.Component{
    render(){
        return(
            <SigninContainer>
            <h1>로고</h1>
            <form>
                <label htmlFor="id">아이디</label>
                <input type="text" id="id" name="id" autoComplete="id" placeholder="gildong@gmail.com"/>
                <label htmlFor="current-password">비밀번호</label>
                <input type="password"  id="current-password" name="pw" autoComplete="pw" placeholder="영문, 숫자, 8글자 이상"/>
                <input className="submit-btn" type="submit" value={"로그인"}/>
            </form>
            <SignupLink to={"/signin"}>회원가입</SignupLink>
            </SigninContainer>
        )
    }
}

export default Signin;

const SigninContainer = styled.div`
    background-color: white;
    height: 100vh;
    
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