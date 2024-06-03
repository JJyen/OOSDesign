import React from "react";
import { IoMdHome } from "react-icons/io"; //홈
import { MdChromeReaderMode } from "react-icons/md"; //최종
import { RiMoneyDollarCircleFill } from "react-icons/ri"; //횐율
import { TiWeatherPartlySunny } from "react-icons/ti"; //날씨
import { FaRegCircleUser } from "react-icons/fa6"; //어카운트
import { FaMapMarkedAlt } from "react-icons/fa"; //지도
import styled from "styled-components";
import { GRAY20,GRAY30, MAIN } from "../styles/Colors";
import { Link } from "react-router-dom";


class TapBar extends React.Component{
    render(){
        return(
            <TapBarContainer>
                <Link to={"/viewweather"}  className="menu-box weather">
                    <TiWeatherPartlySunny/>
                    <TapBarMenu>날씨</TapBarMenu>
                </Link>
                <Link to={"/viewexchagerate"}  className="menu-box exchange-rate">
                    <RiMoneyDollarCircleFill/>
                    <TapBarMenu>환율</TapBarMenu>
                </Link>
                <Link to={"/finalplanlist"} className="menu-box final-view">
                    <MdChromeReaderMode/>
                    <TapBarMenu>최종 목록</TapBarMenu>
                </Link>
                <Link to={"/"} className="menu-box home">
                    <IoMdHome/>
                    <TapBarMenu>홈</TapBarMenu>
                </Link>
                <Link to={"/viewmap"} className="menu-box map">
                    <FaMapMarkedAlt/>
                    <TapBarMenu>지도</TapBarMenu>
                </Link>
                <Link to={"/account"} className="menu-box account">
                    <FaRegCircleUser/>
                    <TapBarMenu>내 정보</TapBarMenu>
                </Link>
            </TapBarContainer>
        )
    }
}

export default TapBar;

const TapBarContainer = styled.div`
    background-color: white;
    position: fixed;
    bottom: 0;
    width: 600px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 40px;
    color: ${GRAY30};
    border-top: 2px solid ${GRAY20};

    .menu-box{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &:hover{
            color: ${MAIN};
        }
    }
`;

const TapBarMenu = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 10px;
`;