import React from "react";
import { Outlet } from "react-router-dom";
import TapBar from "../components/TapBar";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Layout extends React.Component{
    render(){
        return(
            <LayoutContainer >
                <Link to={"/"}><h2>트리뷰</h2></Link>
                <main>
                    <Outlet/>
                </main>
                <nav>
                    <TapBar/>
                </nav>
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
        padding-top: 10px;
        font-family: 'NPSfontBold';
    }
`;