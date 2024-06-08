import React from "react";
import styled from "styled-components";
import { MAIN } from "../styles/Colors";

class WeatherBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    let hours = date.getHours() + 6;
    if (hours >= 24) {
      hours -= 24;
    }
    hours = String(hours).padStart(2, '0');
    
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${month}.${day}. ${hours}:${minutes}`;
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000); 
  }

  render() {
    const { d1, d2, d3, location } = this.props;

    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <WeatherBoxContainer>
        <h4>{location}</h4><hr/>
        <WeatherBoxInfo>
            <div>
                <p>{this.formatDate(d1.date)}</p>
                <p><img src={`https://openweathermap.org/img/wn/${d1.icon}@2x.png`} alt="날씨"/></p>
                <div>
                    <span>{d1.temp}°</span>
                    <span>{d1.humidity}%</span>
                </div>
            </div>
            <div>
                <p>{this.formatDate(d2.date)}</p>
                <p><img src={`https://openweathermap.org/img/wn/${d2.icon}@2x.png`} alt="날씨"/></p>
                <div>
                    <span>{d2.temp}° </span>
                    <span>{d2.humidity}%</span>
                </div>
            </div>
            <div>
                <p>{this.formatDate(d3.date)}</p>
                <p><img src={`https://openweathermap.org/img/wn/${d3.icon}@2x.png`} alt="날씨"/></p>
                <div>
                    <span>{d3.temp}° </span>
                    <span>{d3.humidity}%</span>
                </div>
            </div>
        </WeatherBoxInfo>
      </WeatherBoxContainer>
    );
  }
}

export default WeatherBox;

const WeatherBoxContainer = styled.div`
    width: 450px;
    height: 200px;
    margin-top: 20px;
    border: 3px solid ${MAIN};
    border-radius: 10px;
    padding: 0px 10px;
    text-align: center;


    hr, h4{
        margin-top: 5px;
    }
`;

const WeatherBoxInfo = styled.div`
    display: flex;
    justify-content: space-between;

    & > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    span{
        margin-right: 5px;
        margin-left: 5px;
        font-weight: 500;
    }
`;
