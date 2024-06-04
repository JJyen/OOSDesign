import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import styled from "styled-components";
import { MAIN } from "../styles/Colors";

class PlanListItem extends React.Component{
    render(){
        return(
            <PlanListItemContainer >
                <p className="plan-title">20240721 일본여행🌠</p>
                <p className="plan-delete"><MdDeleteOutline /></p>
            </PlanListItemContainer>
        )
    }
}

export default PlanListItem;

const PlanListItemContainer = styled.div`
    width: 500px;
    height: 60px;
    display: flex;
    align-items: center;
    border: 3px solid ${MAIN};
    border-radius: 10px;
    padding: 0px 10px;
    margin-bottom: 15px;

    .plan-title{
        flex: 1;
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