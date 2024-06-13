import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import styled from "styled-components";
import { MAIN } from "../styles/Colors";
import { Link } from "react-router-dom";

class PlanListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const {title, onDelete} = this.props;
        
        return(
            <PlanListItemContainer >
                <Link to={{ pathname: `makeplan/${title}`}}><p className="plan-title">{title}</p></Link>
                <p className="plan-delete" onClick={() => onDelete(title)}><MdDeleteOutline /></p>
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