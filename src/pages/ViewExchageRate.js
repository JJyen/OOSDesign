import React from "react";
import axios from "axios";
import styled from "styled-components";
import { MAIN } from "../styles/Colors";

class ViewExchageRate extends React.Component{
    state = {
        amount: '',
        amountOfKr: 0,
        currencyCode: '',
        exchangeRate: {},
        unit: '원',
    }

    currencyCodeList = [
        { country: "남아프리카 공화국", code: "zar", unit: "랜드" },
        { country: "네팔", code: "npr", unit: "루피" },
        { country: "노르웨이", code: "nok", unit: "크로네" },
        { country: "뉴질랜드", code: "nzd", unit: "달러" },
        { country: "대만", code: "twd", unit: "달러" },
        { country: "덴마크", code: "dkk", unit: "크로네" },
        { country: "러시아", code: "rub", unit: "루블" },
        { country: "마카오", code: "mop", unit: "파타카" },
        { country: "말레이시아", code: "myr", unit: "링깃" },
        { country: "멕시코", code: "mxn", unit: "페소" },
        { country: "몽골", code: "mnt", unit: "투그릭" },
        { country: "미국", code: "usd", unit: "달러" },
        { country: "바레인", code: "bhd", unit: "디나르" },
        { country: "방글라데시", code: "bdt", unit: "타카" },
        { country: "베트남", code: "vnd", unit: "동" },
        { country: "브라질", code: "brl", unit: "헤알" },
        { country: "브루나이", code: "bnd", unit: "달러" },
        { country: "사우디아라비아", code: "sar", unit: "리얄" },
        { country: "스웨덴", code: "sek", unit: "크로나" },
        { country: "스위스", code: "chf", unit: "프랑" },
        { country: "싱가포르", code: "sgd", unit: "달러" },
        { country: "아랍에미리트", code: "aed", unit: "디르함" },
        { country: "영국", code: "gbp", unit: "파운드" },
        { country: "오만", code: "omr", unit: "리얄" },
        { country: "요르단", code: "jod", unit: "디나르" },
        { country: "유럽연합", code: "eur", unit: "유로" },
        { country: "이스라엘", code: "ils", unit: "신 셰켈" },
        { country: "이집트", code: "egp", unit: "파운드" },
        { country: "인도", code: "inr", unit: "루피" },
        { country: "인도네시아", code: "idr", unit: "루피아" },
        { country: "일본", code: "jpy", unit: "엔" },
        { country: "중국", code: "cny", unit: "위안" },
        { country: "체코", code: "czk", unit: "코루나" },
        { country: "칠레", code: "clp", unit: "페소" },
        { country: "카자흐스탄", code: "kzt", unit: "텡게" },
        { country: "카타르", code: "qar", unit: "리얄" },
        { country: "캐나다", code: "cad", unit: "달러" },
        { country: "쿠웨이트", code: "kwd", unit: "디나르" },
        { country: "태국", code: "thb", unit: "바트" },
        { country: "튀르케예", code: "try", unit: "리라" },
        { country: "파키스탄", code: "pkr", unit: "루피" },
        { country: "폴란드", code: "pln", unit: "즈워티" },
        { country: "필리핀", code: "php", unit: "페소" },
        { country: "헝가리", code: "huf", unit: "포린트" },
        { country: "호주", code: "aud", unit: "달러" },
        { country: "홍콩", code: "hkd", unit: "달러" }
    ]

    componentDidMount = async() => {
        try{
            const res = await axios.get('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/krw.min.json');
            this.setState({exchangeRate: res.data.krw});
            console.log(this.state);
        }catch(error){
            console.log("에러", error);
        }
    }

    handleInputChange = (e) => {
        const inputAcount = e.target.value.replace(/\D/g, '');
        const exchange = parseInt(inputAcount) / this.state.exchangeRate[this.state.currencyCode]; 
        this.setState({ amount: inputAcount, amountOfKr: exchange });
    };

    handleSelectChange = (e) => {
        const selectedCurrencyCode = e.currentTarget.value;
        const selectedCurrency = this.currencyCodeList.find(item => item.code === selectedCurrencyCode);
        const unit = selectedCurrency ? selectedCurrency.unit : "원";
        const exchange = parseInt(this.state.amount) / this.state.exchangeRate[selectedCurrencyCode];
        this.setState({ currencyCode: selectedCurrencyCode, unit: unit, amountOfKr: exchange });
    }
    
    formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      };

    render(){
        return(
            <ExchangeRateContainer>
                <h4>환율 계산</h4><hr/>
                <div>
                    <div>
                        <select onChange={this.handleSelectChange} value={this.state.currencyCode}>
                                <option>선택</option>
                                {this.currencyCodeList.map((item) => (<option key={item.code} value={item.code}>{item.country}</option>))}
                        </select>
                        <AcountInputBox>
                            <input  type="text" placeholder={"100,000"} value={this.formatNumber(this.state.amount)} onChange={this.handleInputChange}/>
                            <span>{this.state.unit}</span>
                        </AcountInputBox>
                    </div>
                    <b>=</b>
                    <KoreaBox>
                        <p>대한민국</p>
                        <p>{this.state.amountOfKr ? (this.formatNumber(Math.ceil(this.state.amountOfKr))) : 0} 원</p>
                    </KoreaBox>
                </div>
            </ExchangeRateContainer>
        )
    }
}

export default ViewExchageRate;

const ExchangeRateContainer = styled.div`
    margin: auto;
    width: 450px;
    height: 300px;
    margin-top: 90px;
    border: 3px solid #41315C;
    border-radius: 7px;
    text-align: center;

    h4{
        margin-top: 10px;
    }

    hr{
        margin-bottom: 40px;
    }

    div > div{
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: center;
    }

    select{
        height: 40px;
        border: 1px solid black;
        outline: none;

        &:hover{
            cursor: pointer;
        }
    }

    b{
        display: inline-block;
        font-size: 35px;
        margin: 20px 0px;
        color: ${MAIN};
    }
`;

const AcountInputBox = styled.div`
     position: relative;

     input{
        height: 40px;
        border: 1px solid black;
        flex: 1;
        padding: 3px 70px 0px 0px;
        outline: none;
        text-align: right;
        font-size: 15px;
    }

     span {
        position: absolute;
        top: 25%;
        right: 5%;
     }
`;

const KoreaBox = styled.div`
    p{
        border: 1px solid black;
        height: 37px;
        padding-top: 8px;
        font-size: 15px;
    }
    
    p:first-of-type{
        width: 135px;
        text-align: left;
        padding-left: 7px;
    }

    p:last-of-type{
        flex: 1;
        text-align: right;
        padding-right: 15px;
    }
`;
