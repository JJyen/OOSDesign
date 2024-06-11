import React from "react";
import styled from "styled-components";
import { GRAY20, MAIN} from "../styles/Colors";

class ViewMap extends React.Component {
    state={
        myLat: 0,
        myLon: 0,
        origin: '',
        destination: '',
        mode: 'walking',

        inputOrigin: '',
        inputDestination: '',
    }

    /*componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            this.setState({
                myLat: lat,
                myLon: lon
            });
        });
    }*/

    onClickBtn = () => {
        this.setState({origin: this.state.inputOrigin, destination: this.state.inputDestination});
    }

    render(){
        const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
        const {mode, inputOrigin, inputDestination, origin, destination} = this.state;
        console.log(this.state);

        return(
            <>
            <InputLocationBox>
                <select id="mode" onChange={(e)=>this.setState({ mode: e.target.value })} value={mode}>
                        <option value="walking">걷기</option>
                        <option value="transit">대중교통</option>
                        <option value="bicycling">자전거</option>
                        <option value="driving">차</option>
                </select>
                <input placeholder="출발지를 입력하세요." type="text" value={inputOrigin} onChange={(e)=>this.setState({ inputOrigin: e.target.value })}/>
                <input placeholder="도착지를 입력하세요." type="text" value={inputDestination} onChange={(e) => this.setState({ inputDestination: e.target.value })}/>
                <button onClick={this.onClickBtn}>길찾기</button>
            </InputLocationBox>
            {this.state.origin && this.state.destination ? 
             <MapFrame title={"map"} 
             src={`https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${origin}&destination=${destination}&mode=${mode}&zoom=14`}/>
            : <RequestText>목적지를 입력하세요.</RequestText>}
            </>
        )
    }
}

export default ViewMap;

const InputLocationBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 10px;

    input, select, button{
        height: 40px;
        border-radius: 10px;
        border: 2px solid #41315C;
        font-size: 15px;
    }


    input{
        width: 200px;
        margin-left: 5px;
        padding: 10px;
    }
    
    button{
        width: 80px;
        margin-left: 5px;
        background-color: white;

        &:hover{
            cursor: pointer;
            background-color: ${MAIN};
            color: white;
        }
    }

`;

const MapFrame = styled.iframe`
    margin-top: 10px;
    width: 100%;
    height: 100vh;
    border: 1px solid ${GRAY20};

`;

const RequestText = styled.p`
    margin: auto;
    text-align: center;
    padding-top: 40%;
    background-color: ${GRAY20};
    width: 95%;
    height: 80vh;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`;