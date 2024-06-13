import React from "react";
import styled from "styled-components";
import { MAIN } from "../styles/Colors";
import { Link } from "react-router-dom";

class FinalPlanListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const {title} = this.props;

        return(
            <FinalPlanListItemContainer>
                <Link to={`/viewfinalplan/${title}`}><p className="plan-title">{title}</p></Link>
            </FinalPlanListItemContainer>
        )
    }
}

export default FinalPlanListItem;

const  FinalPlanListItemContainer = styled.div`
    width: 500px;
    height: 60px;
    display: flex;
    align-items: center;
    border: 3px solid ${MAIN};
    border-radius: 10px;
    padding: 0px 10px;
    margin-bottom: 15px;

    .plan-title{
        width: 450px;
    }

    .plan-delete{
        font-size: 25px;
    }

    .plan-title, .plan-delete{
        font-weight: bold;

        &:hover{
            cursor: pointer;
            color: ${MAIN};
        }
    }

    
`;