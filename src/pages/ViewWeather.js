import React from "react";
import axios from "axios";
import styled from "styled-components";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {GRAY30, MAIN } from "../styles/Colors";
import WeatherBox from "../components/WeatherBox";

class ViewWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myCity: '',
            myTemp: 0,
            myHumidity: 0,
            myDesc: '',

            isSearched: false,

            search: {
                gg: false,
                city: "",
            },

            data_1: {
                date: '',
                temp: 0,
                humidity: 0,
                desc:'',
                icon:'',
            },

            data_2: {},

            data_3: {},
        };
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            this.setState({
                myLat: lat,
                myLon: lon
            },this.getMyWeather);
          });
    }

    getMyWeather = () => {
        const apiKey = process.env.REACT_APP_WEATHER_KEY;
        const { myLat, myLon } = this.state;

        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${apiKey}&units=metric&lang=kr`;

        axios.get(weatherUrl)
            .then((response) => {
                const data = response.data;
                console.log(response);
                this.setState({
                    myCity: data.name,
                    myTemp: Math.ceil(data.main.temp),
                    myHumidity: data.main.humidity,
                    myDesc: data.weather[0].description,
                    icon: data.weather[0].icon,
                });
            })
            .catch((error) => console.log(error));
    }
///////////////////////////////////////////////////////////////////////////////////////////////
    searchWeather = (city) => {
        const cityName = city;
        const apiKey = process.env.REACT_APP_WEATHER_KEY;
        const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

        axios.get(geoUrl)
            .then((response) => {
                const data = response.data[0];
                this.setState({
                    search: {
                      ...this.state.search,
                      lat: data.lat,
                      lon: data.lon,
                      city: data.local_names.ko
                    },
                  }, this.getSearchWeather); // 위치 정보를 설정한 후 날씨 정보를 가져옴
            })
            .catch((error) => console.log(error));
    }

    getSearchWeather = () => {
        const apiKey = process.env.REACT_APP_WEATHER_KEY;
        const { lat, lon } = this.state.search;
        const Url = `https:/api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`;

        axios.get(Url)
            .then((response) => {
                const data1 = response.data.list[1];
                const data2 = response.data.list[2];
                const data3 = response.data.list[3];
                console.log(response);
                this.setState({
                    data_1: {
                        date: data1.dt_txt,
                        temp: Math.ceil(data1.main.temp),
                        humidity: data1.main.humidity,
                        desc: data1.weather[0].description,
                        icon: data1.weather[0].icon,
                    },
                    data_2: {
                        date: data2.dt_txt,
                        temp: Math.ceil(data2.main.temp),
                        humidity: data2.main.humidity,
                        desc: data2.weather[0].description,
                        icon: data2.weather[0].icon,
                    },
                    data_3: {
                        date: data3.dt_txt,
                        temp: Math.ceil(data3.main.temp),
                        humidity: data3.main.humidity,
                        desc: data3.weather[0].description,
                        icon: data3.weather[0].icon,
                    },
                });
            })
            .catch((error) => console.log(error));
    }


    handleInputChange = (e) => {
        this.setState({
          isSearched: false,
          search: {
            ...this.state.search,
            city: e.target.value,
          },
        });
    };

    handleIconClick = () => {
        this.searchWeather(this.state.search.city);
        let noneEmpty = this.state.search.city !== '' ? true : false;
        this.setState({isSearched: noneEmpty});
    };

    render() {
        console.log(this.state)
        const imgSrc = `https://openweathermap.org/img/wn/${this.state.icon}@2x.png`;
        const {data_1, data_2, data_3} = this.state;

        return (
            <ViewWeatherContainer>
                <div className="input-box">
                    <input type="text" placeholder="검색어를 입력하세요" value={this.state.search.city} onChange={this.handleInputChange}/>
                    <i className="fas fa-search" onClick={this.handleIconClick}></i>
                </div>
                <MyLocation>
                    <p>나의 위치</p>
                    <hr/>
                    <div className="my-weather-info">
                        <div>
                            <p className="locatoin-name">{this.state.myCity}</p>
                            <p className="temp">{this.state.myTemp}°</p>
                        </div>
                        <p className="weather-icon"><img src={imgSrc} alt="날씨"/></p>
                        <div>
                            <p className="weather-desc">{this.state.myDesc}</p>
                            <p className="weather-humidity">습도 {this.state.myHumidity}%</p>
                        </div>
                    </div>
                </MyLocation>
                { this.state.isSearched && 
                    <WeatherBox location={this.state.search.city} d1={data_1} d2={data_2} d3={data_3} />}
            </ViewWeatherContainer>
        );
    }
}

export default ViewWeather;

const ViewWeatherContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    .input-box{
        position: relative;
        width: 550px;
    }

    i{
        position: absolute;
        top: 65%;
        right: 10px;
        transform: translateY(-50%);
        color: #aaa;
    }

    input{
        width: 100%;
        margin-top: 20px;
        padding: 10px 30px 10px 10px; /* 오른쪽 패딩을 아이콘 크기보다 크게 설정 */
        border-radius: 20px;
        border: 2px solid ${GRAY30};
        outline: none
    }
`;

const MyLocation = styled.div`
    width: 450px;
    height: 145px;
    margin-top: 40px;
    border: 3px solid ${MAIN};
    border-radius: 10px;
    padding: 0px 10px;

    & > p:first-child{
        text-align: center;
        font-weight: bold;
        margin-top: 5px;
    }

    hr{
        margin-top: 5px;
    }

    .my-weather-info{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .locatoin-name{
            font-size: 15px;
            font-weight: 500;
            margin-left: 15px;
            margin-bottom: 15px;
        }

        .temp{
            font-size: 40px;
            margin-left: 15px;
            margin-bottom: 10px
        }

        img{
            margin-right: 10px;
        }

        div:last-child{
            margin-bottom: 10px;

            p{
                margin-right: 30px;
                line-height: 30px;
                font-size: 15px;
                font-weight: 600;
            }
        } 
    }
    

`;

