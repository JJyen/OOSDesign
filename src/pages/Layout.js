import React from "react";
import { Outlet } from "react-router-dom";
import TapBar from "../components/TapBar";

class Layout extends React.Component{
    render(){
        return(
            <>
            <main>
                <Outlet/>
            </main>
            <nav>
                <TapBar/>
            </nav>
            </>
        )
    }
}

export default Layout;