import React from "react";
import styled from "styled-components";
import { GRAY30, GRAY20, MAIN } from "../styles/Colors";
import { Link, useNavigate } from "react-router-dom";

function withNavigation(Component) {
    return props => <Component {...props} navigate={useNavigate()} />;
}

class Signup extends React.Component{
    render(){
        return(
            <SigninContainer>
            <Link to={"/"}><h1>트리뷰</h1></Link>
            <form>
                <label htmlFor="id">아이디</label>
                <input type="text" id="id" name="id" autoComplete="id" placeholder="gildong"/>
                <label htmlFor="current-password">비밀번호</label>
                <input type="password"  id="current-password" name="pw" autoComplete="pw" placeholder="영문, 숫자, 8글자 이상"/>
                <input type="password"   name="pw"  placeholder="비밀번호를 다시 입력해주세요."/>
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" name="email" autoComplete="email" placeholder="gildong@gmail.com"/>
                <input 
                    className="submit-btn" 
                    type="submit" value={"회원가입"} 
                    onClick={()=>{alert("현재 지원하지 않는 기능입니다."); this.props.navigate('/signin')}}
                />
            </form>
            </SigninContainer>
        )
    }
}

export default withNavigation(Signup);

const SigninContainer = styled.div`
    background-color: white;
    height: 100vh;

    label{
        margin-top: 10px;
        margin-bottom: 5px;
    }
    
    h1{
        text-align: center;
        padding-top: 20px;
        margin-bottom: 80px;
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
        margin-bottom: 10px;
        font-size: 15px;
    }

    .submit-btn{
        margin-top: 20px;
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
