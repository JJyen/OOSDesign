import React from "react";
import { Outlet } from "react-router-dom";
import TapBar from "../components/TapBar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MAIN } from "../styles/Colors";

class Layout extends React.Component{
    constructor(props) {
        super(props);
        const user = JSON.parse(localStorage.getItem("user"));

        this.state = {
            login: user[0].login,
        };
    }

    render(){
        const {login} = this.state;

        return(
            <LayoutContainer >
                <Link to={"/"}><h2>트리뷰</h2></Link>
                { login ? <main><Outlet/></main>
                : 
                <NotLoggedInBox>
                    <h3>로그아웃 상태입니다.</h3>
                    <Link to="/signin"><button>로그인 하기</button></Link>
                </NotLoggedInBox>
                }
                <nav><TapBar/></nav>
            </LayoutContainer>
        )
    }
}

export default Layout;

const LayoutContainer = styled.div`
    background-color: white;
    height: 100vh;

    @font-face {
        font-family: 'NPSfontBold';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/NPSfontBold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
    }

    h2{
        text-align: center;
        padding-top: 20px;
        font-family: 'NPSfontBold';
    }
`;

const NotLoggedInBox = styled.div`
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