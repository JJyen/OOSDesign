import React from "react";
import { Outlet } from "react-router-dom";
import TapBar from "../components/TapBar";
import styled from "styled-components";

class Layout extends React.Component{
    render(){
        return(
            <LayoutContainer >
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
`;